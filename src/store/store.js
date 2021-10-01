import { configureStore } from "@reduxjs/toolkit";
import MailSlice from "./reducers/MailSlice";
import UserSlice from "./reducers/userSlice";

export default configureStore({
  reducer: {
    mail: MailSlice,
    user: UserSlice,
  },
});
