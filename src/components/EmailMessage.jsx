import "./EmailMessage.css";
import React from "react";
import { IconButton, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendmessage } from "../store/reducers/MailSlice";
import { db, firebase } from "../firebase";

function EmailMessage(props) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      createdat: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendmessage());
  };
  return (
    <div className="emailMessage">
      <div className="emailMessage__header">
        <h3>Nouveau message</h3>
        <IconButton onClick={() => dispatch(closeSendmessage())}>
          <CloseIcon style={{ color: "gray" }} />
        </IconButton>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="emailMessage__error">To is required</p>}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="emailMessage__error">Subject is required</p>
        )}
        <textarea
          id="story"
          name="story"
          placeholder="Message..."
          className="emailMessage__message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="emailMessage__error">Message is required</p>
        )}
        <div className="emailMessage__footer">
          <Button
            className="emailMessage__button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Envoyer
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EmailMessage;
