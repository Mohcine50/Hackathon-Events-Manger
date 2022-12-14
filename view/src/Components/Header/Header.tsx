import React from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import profileImage from "../../Images/default-image.png";
import { SIUser } from "../../features/auth-slice";
function Header() {

  const LogedIn = useSelector<RootState>((state) => state.User.LogedIn);
  const User = useSelector<RootState>(state=>state.User.User) as SIUser
  
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
        <>
          {LogedIn ? (
           <Link to={`/profile/${User?._id}`}> <img id='avatar' src={profileImage} alt='profile Avatar' /></Link>
          ) : (
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
          )}
        </>
      </div>
    </div>
  );
}

export default Header;
