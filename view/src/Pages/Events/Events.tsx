import React from "react";
import Event from "../../Components/Event/Event";
import "./events.css";
function Events() {
  return (
    <div className='events'>
      <div className='events-title'>
        <h1>All Events</h1>
        <div className='filter'>
          <select name='filters' id='filters'>
            <option selected disabled>
              filter By
            </option>
            <option value='alphabets'>By A-z</option>
            <option value='submitions'>By Submitions</option>
            <option value='date'>By Date</option>
          </select>
        </div>
      </div>
      <div className='events-list'>
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
}
export default Events;
