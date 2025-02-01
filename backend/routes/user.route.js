import express from "express";
import { getAllUsers, updateUserDetails } from "../controllers/user.controller.js";
const router = express.Router();

// CITIZEN
// router.get("/", );
router.post("/update" , updateUserDetails);
router.get("/users", getAllUsers);




export default router;