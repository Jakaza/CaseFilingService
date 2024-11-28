import express from "express";
const router = express.Router();

// CITIZEN
router.post("/open");
router.post("/close");
router.get("/view");

export default router;
