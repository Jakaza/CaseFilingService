import express from "express";
import { registerCitizen } from "../controllers/officer.controller.js";

const router = express.Router();

router.post("/add", registerCitizen);

export default router;
