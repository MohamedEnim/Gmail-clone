import "./EmailRow.css";
import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { getMailDetails } from "../store/reducers/MailSlice";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const mailDeatils = () => {
    dispatch(
      getMailDetails({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push("/email");
  };
  return (
    <div className="emailRow" onClick={mailDeatils}>
      <div className="emailRow__Options">
        <Checkbox
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <div className="emailRow__title">{title}</div>
      <div className="emailRow__subject">
        {subject}
        <span className="emailRow__description">-{description}</span>
      </div>
      <div className="emailRow__time">{time}</div>
    </div>
  );
}

export default EmailRow;
