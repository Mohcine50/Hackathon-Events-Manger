import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/auth-slice";
import profileReducer from "./features/profile-slice"
import { useDispatch } from "react-redux";
const store = configureStore({
  reducer: {
    User: userReducer,
    Profile: profileReducer
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
