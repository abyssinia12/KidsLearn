// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getProfile,
  approveStudent,
  getAllUsers,
} = require("../controllers/authController");
const verifyToken = require("../middleware/auth");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, getProfile);
router.post("/approve-student", verifyToken, approveStudent);
router.get("/users", verifyToken, getAllUsers);

module.exports = router;
