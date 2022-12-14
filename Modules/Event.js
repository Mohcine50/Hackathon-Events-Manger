const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: {
    type: String,
  },
  description: { String },
  created: { type: Date, default: Date.now },
  eventEnd: { type: String },
  submition: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
