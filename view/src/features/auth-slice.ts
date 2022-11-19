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

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, username, password }: IRegister, thunkAPI) => {
    const body = JSON.stringify({
      email,
      username,
      password,
    });
    try {
      const res = await fetch(`${API_URL}/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const isLoged = createAsyncThunk("auth/isLoged", async (thunkAPI) => {
  try {
    const res = await fetch(`${API_URL}/api/user/`, { credentials: "include" });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: Ilogin, thunkAPI) => {
    const body = JSON.stringify({ email, password });
    try {
      const res = await fetch(`${API_URL}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
        credentials: "include",
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

interface IUser {
  User: {};
  Loading: boolean;
  LoginInMessage: string;
  RegisterMessage: string;
  LogedIn: boolean;
}

const initialState: IUser = {
  User: {},
  Loading: false,
  LogedIn: false,
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
        state.LogedIn = true;
        state.User = action.payload;
      }
    });
    builder.addCase(register.pending, (state) => {
      state.Loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.Loading = false;
      const data = action.payload;
      if (data.user) {
        state.RegisterMessage = "registred";
      } else {
        state.RegisterMessage = data.message;
      }
    });
    builder.addCase(isLoged.fulfilled, (state, action) => {
      if (action.payload.id) {
        state.LogedIn = true;
      }
    });
  },
});

export default authSlice.reducer;
