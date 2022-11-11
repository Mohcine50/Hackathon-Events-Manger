import React from "react";
import "./event.css";
import hacka from "../../Images/hackatoon.webp";
function Event() {
  return (
    <div className='event'>
      <img src={hacka} alt='hackatoon' />
      <div className='infos'>
        <div className='more-info'>
          <h2>spanHacka toon Namw</h2>
          <p>180 Participant</p>
        </div>
        <div className='date-info'>
          <p>hack descrption</p>
          <p>1:22:11</p>
        </div>
      </div>
    </div>
  );
}
export default Event;
