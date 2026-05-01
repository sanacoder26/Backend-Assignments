import { Router } from "express";
const router = Router();

import { registerUser, loginUser, getUsers } from "../controllers/authController";

import { verifyToken } from "../middleware/authMiddleware";
import { isAdmin } from "../middleware/roleMiddleware";

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected routes
router.get("/users", verifyToken, getUsers);

// Admin route
router.get("/admin", verifyToken, isAdmin, (req, res) => {
  res.json({ message: "Welcome Admin" });
});

export default router;