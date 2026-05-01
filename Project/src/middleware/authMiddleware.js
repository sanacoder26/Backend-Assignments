const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/authController");

const { verifyToken } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/roleMiddleware");

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected routes
router.get("/users", verifyToken, getUsers);

// Admin route
router.get("/admin", verifyToken, isAdmin, (req, res) => {
  res.json({ message: "Welcome Admin" });
});

module.exports = router;