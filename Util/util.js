const bcrypt = require("bcrypt");
const Event = require("../Modules/Event");


const passwordBcrypt = async (password) => {
  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds);

  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

const passwordCompare = async (hashedPassword, password) => {
  const result = bcrypt.compare(password, hashedPassword);

  return result;
};

// get Event data from events ids array
const getEvent = async (events) => {
  let eventsData = [];

  for (let i = 0; i < events.length; i++) {
    const event = await Event.findOne({ _id: events[i] });
    eventsData.push(event);
  }

  return eventsData;
};



module.exports = { passwordBcrypt, passwordCompare, getEvent };
