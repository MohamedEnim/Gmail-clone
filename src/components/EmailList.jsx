import "./EmailList.css";
import React, { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import SettingsIcon from "@material-ui/icons/Settings";
import KeyboardIcon from "@material-ui/icons/Keyboard";

import InboxIcon from "@material-ui/icons/Inbox";
import GroupIcon from "@material-ui/icons/Group";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailListSection from "./EmailListSection";
import EmailRow from "./EmailRow";
import { db } from "../firebase";

function EmailList(props) {
  const [emailList, setEmailList] = useState([]);
  useEffect(() => {
    db.collection("emails")
      .orderBy("createdat", "desc")
      .onSnapshot((snopshot) => {
        setEmailList(
          snopshot.docs.map((doc) => ({
            id: doc.id,
            mail: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__tools">
        <div className="emailList__toolsLeft">
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <EmailListSection
          Icon={InboxIcon}
          label="Principale"
          color="red"
          selected
        />
        <EmailListSection
          Icon={GroupIcon}
          label="Réseaux sociaux"
          color="#1A73E8"
        />
        <EmailListSection
          Icon={LocalOfferIcon}
          label="Promotions"
          color="green"
        />
      </div>
      <div className="emailList__list">
        {emailList.map(({ id, mail: { to, subject, message, createdat } }) => (
          <EmailRow
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(createdat?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
