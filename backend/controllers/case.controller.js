import passport from "passport";
import { openCase, requestCloseCase , generatedCaseNumber } from "../helpers/case.helper.js";
import Case from "../models/caseSchema.js";
import CloseReason from "../models/closeReasonSchema.js";

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
      province,
      township,
      station,
      language,
      caseDescription,
      caseType,
    } = req.body;

    const caseNumber = generatedCaseNumber()

    const caseData = {
      caseTitle,
      province,
      township,
      station,
      language,
      caseDescription,
      caseType,
      caseNumber: caseNumber,
      citizen: user._id,
    };

    openCase(caseData, Case).then((response) => {
      return res.status(201).json({ response: response });
    });
  })(req, res, next);
};

export const close = async (req, res, next) => {
  passport.authenticate("jwt", { session: false }, async (err, user, info) => {
    if (err) {
      return res.status(500).json("Server Error Try Again");
    }
    if (!user) {
      return res.json({ message: "Not Atheticated to open case" });
    }
    const { reason, additionalComments } = req.body;
    const caseId = req.params.caseId;

    const closeReasonData = {
      caseId,
      reason,
      additionalComments,
      citizenId: user._id,
    };
    requestCloseCase(closeReasonData, Case, CloseReason).then((response) => {
      return res.status(201).json({ response: response });
    });
  })(req, res, next);
};
