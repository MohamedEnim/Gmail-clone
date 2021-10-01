import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageIsOpen: false,
  mailDetails: null,
};

export const MailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    openSendMessge: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendmessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    getMailDetails: (state, action) => {
      state.mailDetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openSendMessge, closeSendmessage, getMailDetails } =
  MailSlice.actions;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectMailDetails = (state) => state.mail.mailDetails;
export default MailSlice.reducer;
