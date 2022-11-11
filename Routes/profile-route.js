const express = require("express");
const router = express.Router();
const { updateProfile } = require("../Controllers/profile-controller");

router.get("/", (req, res) => {
  res.send("welcome on profile route");
});

router.put("/:id", updateProfile);

module.exports = router;
