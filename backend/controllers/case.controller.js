import passport from "passport";
import {
  openCase,
  viewCases,
  requestCloseCase,
} from "../helpers/case.helper.js";
import Case from "../models/caseSchema.js";
import CloseReason from "../models/closeReasonSchema.js";
import sendMessage from "../services/nodemailer.js";

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
      language,
      policeStation,
      township,
      province,
    } = req.body;

    const caseNumber = generateCaseNumber();

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
      language,
      policeStation,
      township,
      province,
      caseNumber: caseNumber,
    };
    console.log(caseNumber);

    openCase(caseData, Case)
      .then((response) => {
        return res.status(201).json({ response: response, success: true });
      })
      .catch((err) => {
        return res.status(401).json({ response: err, success: false });
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
    const { reason, additionalComments, caseId } = req.body;

    const closeReasonData = {
      caseId,
      reason,
      additionalComments,
      citizenId: user._id,
    };
    requestCloseCase(closeReasonData, Case, CloseReason)
      .then((response) => {
        return res.status(201).json({ response: response });
      })
      .catch((err) => {
        console.log(err);

        return res.status(401).json({ response: err, success: false });
      });
  })(req, res, next);
};

export const view = async (req, res, next) => {
  passport.authenticate("jwt", { session: false }, async (err, user, info) => {
    if (err) {
      return res.status(500).json("Server Error Try Again");
    }
    if (!user) {
      return res.json({ message: "Not Atheticated to open case" });
    }
    console.log(user);

    viewCases(user._id, Case)
      .then((response) => {
        return res.status(201).json({ response: response });
      })
      .catch((err) => {
        return res.status(401).json({ response: err, success: false });
      });
  })(req, res, next);
};

export const viewAll = async (req, res, next) => {
  passport.authenticate("jwt", { session: false }, async (err, user, info) => {
    if (err) {
      return res.status(500).json("Server Error Try Again");
    }
    if (!user) {
      return res.json({ message: "Not Atheticated to open case" });
    }
    console.log(user);

    viewCases(null, Case)
      .then((response) => {
        return res.status(201).json({ response: response });
      })
      .catch((err) => {
        return res.status(401).json({ response: err, success: false });
      });
  })(req, res, next);
};

function generateCaseNumber() {
  const today = new Date();
  const year = today.getFullYear();
  const date = today.getDate().toString().padStart(2, "0");

  const randomLetters = Array.from({ length: 4 }, () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26))
  ).join("");

  const caseNumber = `${year}${date}${randomLetters}`;
  return caseNumber;
}
