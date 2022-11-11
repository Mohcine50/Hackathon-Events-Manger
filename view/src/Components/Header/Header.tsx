import React from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <h1>
          <Link className='link' to='/'>
            EVENT<span>OR</span>
          </Link>
        </h1>
      </div>
      <div className='menu'>
        <ul>
          <li>
            <NavLink className='link' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='link' to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className='link' to='/events'>
              Events
            </NavLink>
          </li>
        </ul>
        <div className='h-btns'>
          <button>
            <Link
              to='/login'
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Login
            </Link>
          </button>
          <button>
            <Link
              to='/register'
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Register
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
