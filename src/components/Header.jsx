import "./Header.css";
import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import TuneIcon from "@material-ui/icons/Tune";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import { selectUser, signOut } from "../store/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";

function Header(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signOutUser = () => {
    auth.signOut().then(() => {
      dispatch(signOut());
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt=""
        />
      </div>
      <div className="header__search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="Rechercher dans les messages" />
        <IconButton>
          <TuneIcon />
        </IconButton>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton onClick={() => signOutUser()}>
          <Avatar alt={user?.displayName} src={user?.userPhotoUrl} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
