import express from "express";
import {
  adminLogin,
  login,
  logout,
  registerCitizen,
} from "../controllers/auth.controller.js";
// import { login, logout, register } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerCitizen);
router.post("/admin-login", adminLogin);
router.post("/login", login);
router.post("/logout", logout);
router.post("/logout", logout);

export default router;
