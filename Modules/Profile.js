const mongoose = require("mongoose");

const { Schema } = mongoose;

const profileSchema = new Schema({
  image: {
    type: String,
    default: "./view/Image/default-image.png"
  },
  bio: { type: String, default: "No Bio" },
  fullName: { type: String, default:"No Name" },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
