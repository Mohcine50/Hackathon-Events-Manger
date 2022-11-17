const User = require("../Modules/User");
const Profile = require("../Modules/Profile");
const { passwordBcrypt, passwordCompare } = require("../Util/util");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { email, password, username } = req.body;

  const existedEmail = await User.findOne({ email: email });
  const existedUsername = await User.findOne({ username: username });

  if (existedEmail) {
    return res.json({ message: "email already existed" });
  }
  if (existedUsername) {
    return res.json({ message: "username already existed" });
  }

  try {
    const hashedPassword = await passwordBcrypt(password);
    const profile = new Profile();
    await profile.save();
    const user = new User({
      email: email,
      password: hashedPassword,
      username: username,
      profile: profile,
    });

    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    return res
      .status(400)
      .json({ message: "No user associated with this email" });
  }

  const result = await passwordCompare(user.password, password);
  if (!result) {
    return res.status(400).json({ message: "Wrong password" });
  }

  const token = jwt.sign({ id: user._id }, process.env.SECRET_TOKEN_PHRASE);
  return res
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    })
    .status(200)
    .json({ user, token });
};

logOut = async (req, res) => {
  return res
    .clearCookie("token")
    .status(200)
    .json({ message: "Successfully logged out" });
};

module.exports = { register, login, logOut };
