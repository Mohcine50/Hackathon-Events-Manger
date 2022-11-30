const JWT = require("jsonwebtoken");

exports.validate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(400).json({ message: "access denied" });
  }

  try {
    const verified = JWT.verify(token, process.env.SECRET_TOKEN_PHRASE);
    req.user = verified;
    
    return next();
  } catch (error) {
    return res.status(400).json({ message: "access denied" });
  }
};
