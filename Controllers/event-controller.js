const Event = require("../Modules/Event");
const User = require("../Modules/User");
const { getEvent } = require("../Util/util");

const getEventById = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findOne({ _id: id });
    res.status(200).json(event);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "event not found" });
  }
};

const getEventsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    const events = user.events;

    eventsData = await getEvent(events);
    res.status(200).json(eventsData);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const addEvent = async (req, res) => {
  const { title, description, eventEnd } = req.body;
  const { userId } = req.params;

  const user = User.findById(userId);

  const event = new Event({ title, description, eventEnd });

  try {
    await event.save();
    await user.findOneAndUpdate(
      { _id: userId },
      { $push: { events: event._id } }
    );
    res.status(200).json(event);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Event Didi't registred" });
  }
};

const deleteEvent = async (req, res) => {
  const { id, userId } = req.params;

  try {
    await User.findOneAndUpdate({ _id: userId }, { $pull: { events: id } });
    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: "deletion succeed" });
  } catch (error) {
    console.log(error);
    res.status(300).json({ message: "deletion failed" });
  }
};

const updateEvent = async (req, res) => {
  const body = req.body;
};

module.exports = {
  addEvent,
  deleteEvent,
  getEventsByUserId,
  getEventById,
  updateEvent,
};
