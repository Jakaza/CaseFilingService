import passport from "passport";
import { openCase } from "../helpers/case.helper.js";
import Case from "../models/caseSchema.js";

export const open = async (req, res, next) => {
  passport.authenticate("jwt", { session: false }, async (err, user, info) => {
    if (err) {
      return res.status(500).json("Server Error Try Again");
    }
    if (!user) {
      return res.json({ message: "Not Atheticated to open case" });
    }
    const {
      caseTitle,
      caseDescription,
      caseType,
      assignedOfficer,
      officerComments,
      courtDetails,
      caseDocuments,
    } = req.body;

    const caseData = {
      caseTitle,
      caseDescription,
      caseType,
      citizen: user._id,
      assignedOfficer,
      officerComments,
      courtDetails,
      caseDocuments,
    };

    openCase(caseData, Case).then((response) => {
      return res.status(201).json({ response: response });
    });
  })(req, res, next);
};
