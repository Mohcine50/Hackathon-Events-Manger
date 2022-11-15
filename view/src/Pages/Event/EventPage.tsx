import React from "react";
import Participant from "../../Components/Participants/Participant";
import hackatoon from "../../Images/hackatoon.webp";
import "./eventPage.css";

function EventPage() {
  return (
    <div className='eventPage'>
      <div className='infos'>
        <img src={hackatoon} alt='' />
        <h1>Event Name</h1>
        <p>Event Description</p>
        <div className='more-infos'>
          <h2>Created Date : 22/883</h2>
          <h2>End Date : 22/883</h2>
          <h2>Participant Number</h2>
        </div>
      </div>
      <h1>Participant</h1>
      <div className='Participants'>
        <Participant />
        <Participant />
        <Participant />
        <Participant />
      </div>
    </div>
  );
}

export default EventPage;
