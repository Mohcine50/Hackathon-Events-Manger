const mongoose = require("mongoose");

const { Schema } = mongoose;

const profileSchema = new Schema({
  image: {
    type: String,
  },
  bio: { type: String, default: "No Bio" },
  fullName: { type: String },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
