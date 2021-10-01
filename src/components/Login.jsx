import "./Login.css";
import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { signIn } from "../store/reducers/userSlice";

function Login() {
  const dispatch = useDispatch();
  const signInUser = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          signIn({
            displayName: user.displayName,
            email: user.email,
            userPhotoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt=""
        />
        <div className="login__button">
          <Button
            onClick={() => signInUser()}
            className="login__button"
            color="primary"
            variant="contained"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
