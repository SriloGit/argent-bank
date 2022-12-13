import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slices/auth";
import messageReducer from "../slices/message";

const reducer = {
  auth: authReducer,
  message: messageReducer
}

export default configureStore({
  reducer: reducer,
  devTools: true,
});