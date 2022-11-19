const express = require("express");
const router = express.Router();
const { register, login, logOut } = require("../Controllers/user-controller");

const { validate } = require("../Util/middlewares");

router.get("/", validate, (req, res) => {
  const user = req.user;
  res.status(201).json(user);
});

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logOut);

module.exports = router;
