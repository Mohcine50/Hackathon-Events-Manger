import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface Ilogin {
  email: string;
  password: string;
}
interface IRegister {
  email: string;
  username: string;
  password: string;
}

const API_URL = "http://localhost:3000";
const CONFIG = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, username, password }: IRegister, thunkAPI) => {
    const body = JSON.stringify({
      email,
      username,
      password,
    });
    try {
      const res = await axios.post(
        `${API_URL}/api/user/register`,
        body,
        CONFIG
      );
      const data = await res.data;
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return err.response?.data;
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: Ilogin, thunkAPI) => {
    const body = JSON.stringify({ email, password });
    try {
      const res = await axios.post(`${API_URL}/api/user/login`, body, CONFIG);
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
  RegisterMessage: string;
}

const initialState: IUser = {
  User: {},
  Loading: false,
  LoginInMessage: "",
  RegisterMessage: "",
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
    builder.addCase(register.pending, (state) => {
      state.Loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.Loading = false;
      const data = action.payload;
      console.log(data);
      if (data.user) {
        state.RegisterMessage = "registred";
      } else {
        state.RegisterMessage = data;
      }
    });
  },
});

export default authSlice.reducer;
