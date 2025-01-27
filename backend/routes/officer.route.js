import express from "express";
import {
  getAllOfficers,
  registerCitizen,
} from "../controllers/officer.controller.js";

const router = express.Router();

router.post("/add", registerCitizen);
router.get("/all", getAllOfficers);

export default router;
