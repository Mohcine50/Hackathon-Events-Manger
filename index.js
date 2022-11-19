const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const user = require("./Routes/user-route");
const profile = require("./Routes/profile-route");
const event = require("./Routes/event-route");
const submition = require("./Routes/submition-route");
const { validate } = require("./Util/middlewares");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome! Nothing to see here ");
});

app.use("/api/user", user);
app.use("/api/profile", validate, profile);
app.use("/api/event", validate, event);
app.use("/api/submition", validate, submition);

mongoose.connect(process.env.MONGODB, () => {
  console.log("Connect to MongoDb");
});

app.listen(PORT, () => {
  console.log(`Listen to port: ${PORT}`);
});
