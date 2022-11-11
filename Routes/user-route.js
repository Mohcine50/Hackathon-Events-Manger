const express = require("express");
const router = express.Router();
const { register, login, logOut } = require("../Controllers/user-controller");

router.get("/", (req, res) => {
  res.send("welcome on user route");
});

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logOut);

module.exports = router;
