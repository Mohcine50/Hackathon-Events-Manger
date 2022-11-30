const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: { type: String },
  username: { type: String, unique: true },
  register: { type: Date, default: Date.now },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
  submittions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Submition",
    },
  ],
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
});



module.exports = User  = mongoose.model("User", userSchema);;
