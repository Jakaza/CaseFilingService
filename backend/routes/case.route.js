import express from "express";
import { close, open, view, viewAll , asignOfficer } from "../controllers/case.controller.js";
const router = express.Router();

// CITIZEN
router.get("/view-case", view);
router.get("/view-cases", viewAll);
router.post("/open", open);
router.post("/close-request", close);


router.post("/asign-officer", asignOfficer);

export default router;
