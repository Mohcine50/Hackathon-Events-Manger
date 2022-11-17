import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/auth-slice";
import { useDispatch } from "react-redux";
const store = configureStore({
  reducer: {
    User: userReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
