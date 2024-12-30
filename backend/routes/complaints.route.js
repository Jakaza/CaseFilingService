import express from "express";
import {  open } from "../controllers/complaint.controller.js";
const router = express.Router();

// CITIZEN
router.post("/open", open);


// ADMIN
// router.get("/view-report" , view);
// router.post("/close-report", close);


export default router;
