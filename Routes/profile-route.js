const express = require("express");
const router = express.Router();
const { updateProfile, getProfileByid } = require("../Controllers/profile-controller");

router.get("/", (req, res) => {
  res.send("welcome on profile route");
});

router.get("/:profileId", getProfileByid)
router.put("/:id", updateProfile);

module.exports = router;
