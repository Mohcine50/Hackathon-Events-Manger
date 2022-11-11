import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
function Login() {
  return (
    <div className='login'>
      <form action=''>
        <label> E-mail</label>
        <input type='email' placeholder='Enter Your Email' />
        <label>Password</label>
        <input type='password' placeholder='Enter your password' />
        <input type='submit' value='Login' />
      </form>
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
