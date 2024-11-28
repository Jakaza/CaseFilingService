import express from "express";
import { close, open } from "../controllers/case.controller.js";
const router = express.Router();

// CITIZEN
router.post("/open", open);
router.post("/:caseId/close-request", close);
router.get("/view");

export default router;
