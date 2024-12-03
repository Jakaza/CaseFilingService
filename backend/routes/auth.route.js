import express from "express";
import  {login, logout, registerCitizen }  from "../controllers/auth.controller.js";
// import { login, logout, register } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerCitizen);
router.post("/login", login);
router.post("/logout", logout);

export default router;