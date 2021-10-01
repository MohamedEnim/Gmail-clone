import "./Sidebar.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import OptionSection from "./OptionSection";
import SendIcon from "@material-ui/icons/Send";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

import InboxIcon from "@material-ui/icons/Inbox";

import StarIcon from "@material-ui/icons/Star";

import NoteIcon from "@material-ui/icons/Note";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";

import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ReportIcon from "@material-ui/icons/Report";
import { IconButton } from "@material-ui/core";

import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { openSendMessge } from "../store/reducers/MailSlice";
import { useDispatch } from "react-redux";

function Sidebar(props) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const openOptions = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sidebar">
      <div className="sidebar__addMsg">
        <Button
          onClick={() => dispatch(openSendMessge())}
          className="sidebar__button"
          variant="contained"
          startIcon={
            <img
              src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
              alt=""
            />
          }
        >
          Nouveau message
        </Button>
      </div>
      <div className="sidebar__options">
        <OptionSection
          Icon={InboxIcon}
          label="Boite de recéption"
          number={10}
          selected={true}
        />
        <OptionSection Icon={StarIcon} label="Message suivis" number={10} />
        <OptionSection Icon={WatchLaterIcon} label="En attente" number={10} />
        <OptionSection Icon={SendIcon} label="Messages envoyés" number={10} />
        <OptionSection Icon={NoteIcon} label="Brouillons" number={10} />
        <div className="sidebar__expand" onClick={openOptions}>
          {!isOpen ? (
            <OptionSection Icon={ExpandMoreIcon} label="Plus" />
          ) : (
            <div>
              <OptionSection Icon={ExpandLessIcon} label="moins" />
              <OptionSection
                Icon={LabelImportantIcon}
                label="Important"
                number={10}
              />

              <OptionSection Icon={ReportIcon} label="Spam" number={10} />
              <OptionSection Icon={DeleteIcon} label="Corbeille" number={10} />
            </div>
          )}
        </div>
      </div>
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>

          <IconButton>
            <DuoIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
