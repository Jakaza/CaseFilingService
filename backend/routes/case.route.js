import express from "express";
import { close, open , view } from "../controllers/case.controller.js";
const router = express.Router();

// CITIZEN
router.get("/view-case" , view);
router.post("/open", open);
router.post("/close-request", close);


export default router;
