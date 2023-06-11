import express from "express";
import {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
// import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

// when multiple requests types are sent to 1 route
router
  .route("/profile")
  .get(getUserProfile)
  .put(updateUserProfile);

export default router
