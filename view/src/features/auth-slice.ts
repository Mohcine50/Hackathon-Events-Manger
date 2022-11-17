import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface Ilogin {
  email: string;
  password: string;
}

const API_URL = "http://localhost:3000";
const Config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: Ilogin, thunkAPI) => {
    try {
      const body = JSON.stringify({ email, password });
      const res = await axios.post(`${API_URL}/api/user/login`, body, Config);
      const data = await res.data;
      console.log(data);
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return err.response?.data;
    }
  }
);

interface IUser {
  User: {};
  Loading: boolean;
  LoginInMessage: string;
}

const initialState: IUser = {
  User: {},
  Loading: false,
  LoginInMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.Loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.Loading = false;
      const data = action.payload;
      if (data.message) {
        state.LoginInMessage = data.message;
      } else {
        state.LoginInMessage = "Login Successful";
        state.User = action.payload;
      }
    });
  },
});

export default authSlice.reducer;
