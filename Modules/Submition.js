const mongoose = require("mongoose");

const { Schema } = mongoose;

const submitionSchema = new Schema({
  event: { type: Schema.Types.ObjectId, ref: "Event" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
});

const Submition = mongoose.model("Submition", submitionSchema);

module.exports = Submition;
