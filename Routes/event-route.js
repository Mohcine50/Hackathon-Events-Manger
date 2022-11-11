const express = require("express");
const {
  addEvent,
  deleteEvent,
  getEventsByUserId,
  getEventById,
} = require("../Controllers/event-controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome on event route");
});
router.get("/:id", getEventById);
router.get("/user/:userId/", getEventsByUserId);
router.post("/:userId/add", addEvent);
router.delete("/:userId/delete/:id", deleteEvent);

module.exports = router;
