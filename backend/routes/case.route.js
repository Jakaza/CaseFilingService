import express from "express";
import { open } from "../controllers/case.controller.js";
const router = express.Router();

// CITIZEN
router.post("/open", open);
router.post("/close");
router.get("/view");

export default router;
