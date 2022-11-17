import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./login.css";
import { login } from "../../features/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const loading = useSelector<RootState>((state) => state.User.Loading);
  const loginMessage = useSelector<RootState>(
    (state) => state.User.LoginInMessage
  );

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };
  useEffect(() => {
    if (loginMessage == "Login Successful") {
      Navigate("/");
    }
  }, [loginMessage]);

  return (
    <div className='login'>
      <form onSubmit={(e) => submitHandler(e)}>
        <label> E-mail</label>
        <input
          type='email'
          placeholder='Enter Your Email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='Enter your password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type='submit' value='Login' />
      </form>
      <> {loading && <h2>loading</h2>}</>

      <p>
        You don't have an account{" "}
        <Link className='link-w' to='/register'>
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
