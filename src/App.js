import "./App.css";
import EmailList from "./components/EmailList";
import Email from "./components/Email";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailMessage from "./components/EmailMessage";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./store/reducers/MailSlice";
import { selectUser, signIn } from "./store/reducers/userSlice";
import { useEffect } from "react";
import Login from "./components/Login";
import { auth } from "./firebase";

function App() {
  const selectSendMessage = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  auth.onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      dispatch(
        signIn({
          displayName: user.displayName,
          email: user.email,
          userPhotoUrl: user.photoURL,
        })
      );
    }
  });

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route path="/email">
                <Email />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
            {selectSendMessage && <EmailMessage />}
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
