const jwt = require("jsonwebtoken");
const JWT_SECRET =
  "YlMvaOm8ssZ/7UoPGnXyy0PSxD+l6TEEE5PMWr+52vVviWno5WPSo4Mg0+rZEyR0w2oRaiv68D6IhZEoUUNqXA==";

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided." });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token." });
  }
};
