const User = require("../Modules/User");
const Submition = require("../Modules/Submition");
const Event = require("../Modules/Event");

const addSubmition = async (req, res) => {
  const { userId, eventId } = req.params;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(300).json({ message: "User Not found" });
  }
  const event = await Event.findById(eventId);
  if (!event) {
    return res.status(300).json({ message: "Event Not found" });
  }

  try {
    const submition = new Submition({ event: eventId, user: userId });
    await submition.save();

    await event.update({ $push: { submition: submition._id } });
    await user.update({ $push: { submittions: submition._id } });

    res.status(200).json({ message: "submit successfuly" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "submittion failed" });
  }
};

const deleteSubmition = async (req, res) => {
  const { userId, eventId, id } = req.params;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(300).json({ message: "User Not found" });
  }
  const event = await Event.findById(eventId);
  if (!event) {
    return res.status(300).json({ message: "Event Not found" });
  }

  try {
    await Submition.findByIdAndDelete(id);

    await event.updateOne({ $pull: { submition: id } });
    await user.updateOne({ $pull: { submittions: id } });

    res.status(200).json({ message: "delete successfuly" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "delete failed" });
  }
};

module.exports = { addSubmition, deleteSubmition };
