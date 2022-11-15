import React from "react";
import "./participant.css";
import profile from "../../Images/default-image.png";

function Participant() {
  return (
    <div className='participant'>
      <img src={profile} alt='profile' />
      <h2>Username</h2>
    </div>
  );
}

export default Participant;
