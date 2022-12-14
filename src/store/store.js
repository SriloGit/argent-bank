import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slices/auth";
import messageReducer from "../slices/message";
import profileReducer from '../slices/profile'

const reducer = {
  auth: authReducer,
  message: messageReducer,
  profile: profileReducer
}

export default configureStore({
  reducer: reducer,
  devTools: true,
});