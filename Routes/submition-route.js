const express = require("express");
const {
  addSubmition,
  deleteSubmition,
} = require("../Controllers/submition-controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome on submition route");
});

router.post("/:userId/:eventId/add", addSubmition);
router.delete("/:userId/:eventId/delete/:id", deleteSubmition);

module.exports = router;
