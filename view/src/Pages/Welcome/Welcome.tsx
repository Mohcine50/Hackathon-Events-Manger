import React from "react";
import { Outlet } from "react-router-dom";
import "./welcome.css";

function Welcome() {
  return (
    <div className='welcome'>
      <h1>
        Welcome To EVENT<span>OR</span>
      </h1>
      <Outlet />
    </div>
  );
}

export default Welcome;
