import React from "react";
import { Link } from "react-router-dom";
import "./register.css";
function Register() {
  return (
    <div className='register'>
      <form action=''>
        <label> E-mail</label>
        <input type='email' placeholder='Enter Your Email' />
        <label> Username</label>
        <input type='text' placeholder='Enter a Username' />
        <label>Password</label>
        <input type='password' placeholder='Confirm your password' />
        <label>Password</label>
        <input type='password' placeholder='Enter your password' />
        <input type='submit' value='Register' />
      </form>
      <p>
        Already had an account{" "}
        <Link className='link-w' to='/login'>
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;
