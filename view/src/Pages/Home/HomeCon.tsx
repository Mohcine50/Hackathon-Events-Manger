import React from "react";
import "./home.css";
import event from "../../Images/event.svg";
import Event from "../../Components/Event/Event";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";
function HomeCon() {
  return (
    <div className='home'>
      <div className='hero'>
        <img src={event} />
        <div className='right'>
          <h1>Events Manager</h1>
          <h2>Manage Hackatoon Events and Participate</h2>
          <p>
            Participate In one of the Hackaton Events and Earn Prize Pool, by
            compete in beginner friendly coding & designing challenges and win
            prizes! Learn and collaborate with other devs to level up your
            skills.
          </p>
        </div>
      </div>
      <div className='upcoming'>
        <h1>Upcomming Events</h1>
        <div className='home-events'>
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </div>
    </div>
  );
}
export default HomeCon;
