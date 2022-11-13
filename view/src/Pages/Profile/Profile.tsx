import React from "react";
import Event from "../../Components/Event/Event";
import "./profile.css";
import defautlProfile from "../../Images/default-image.png";

function Profile() {
  return (
    <div className='profile'>
      <div className='profile-info'>
        <img src={defautlProfile} alt='profile' />
        <h1>Full Name</h1>
        <h2>Bio </h2>
        <div className='es-infos'>
          <h3>12 Events</h3>
          <h3>12 Events submition</h3>
        </div>
      </div>
      <div className='profile-events'>
        <h1>Events</h1>
        <div>
          <Event />
          <Event />
          <Event />
        </div>
      </div>
      <div className='profile-submition'>
        <h1>Submition Events</h1>
        <div>
          <Event />
          <Event />
          <Event />
        </div>
      </div>
    </div>
  );
}

export default Profile;
