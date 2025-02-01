import passport from "passport";
import {
  openCase,
  viewCases,
  requestCloseCase,
} from "../helpers/case.helper.js";
import Case from "../models/caseSchema.js";
import CloseReason from "../models/closeReasonSchema.js";
import { sendMessage } from "../services/nodemailer.js";
import Officer from "../models/officerSchema.js";
import Citizen from "../models/citizenSchema.js";

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
      language,
      policeStation,
      township,
      province,
    } = req.body;

    const caseNumber = generateCaseNumber();

    const caseData = {
      caseTitle,
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

    openCase(caseData, Case)
      .then((response) => {


        const caseAndUserDetails = {
          email: user.email,
          subject: `Case Opened Successfully – Case Reference: ${response.data.caseNumber}`,
          title: response.data.caseTitle,
          caseType: response.data.caseType,
          status: response.data.status,
          caseNumber: response.data.caseNumber,
          policeStation: response.data.policeStation,
          firstname: user.firstname,
          type: "openCase"

        }
        sendMessage(caseAndUserDetails);

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
  viewCases(null, Case)
    .then((response) => {
      return res.status(201).json({ response: response });
    })
    .catch((err) => {
      return res.status(401).json({ response: err, success: false });
    });
};


export const asignOfficer = async (req, res) => {
  try {
    const { caseId, officerId } = req.body;

    // Validate input
    if (!caseId || !officerId) {
      return res.status(400).json({
        success: false,
        message: "Both caseId and officerId are required.",
      });
    }

    // Fetch the case by ID
    const fetchedCase = await Case.findOne({ _id: caseId });
    if (!fetchedCase) {
      return res.status(404).json({
        success: false,
        message: "Case not found.",
      });
    }

    // Check if an officer is already assigned
    if (fetchedCase.assignedOfficer) {
      return res.status(400).json({
        success: false,
        message: "An officer is already assigned to this case.",
      });
    }

    // Assign the officer to the case
    fetchedCase.assignedOfficer = officerId;
    const updatedCase = await fetchedCase.save();

    const officerDetails = await Officer.findById(officerId);
    if (!officerDetails) {
      return res.status(404).json({
        success: false,
        message: "Officer not found.",
      });
    }

    const userDetails = await Citizen.findById(updatedCase.citizen);
    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "Case User not found.",
      });
    }

    // Update Firstname and get via auth from User.
    const caseWithOfficerDetails = {
      email: userDetails.email,
      firstname: userDetails.firstname,
      officerFirstname: officerDetails.firstname,
      officerSurname: officerDetails.surname,
      officerRank: officerDetails.rank,
      officerBadgeNumber: officerDetails.badgeNumber,
      officerNumber: officerDetails.phone,
      caseNumber : updatedCase.caseNumber,
      type: "assignCase",
      subject : "Your Case Has Been Assigned to an Officer"
    }
    sendMessage(caseWithOfficerDetails)
    res.status(200).json({
      success: true,
      message: "Officer has been successfully assigned to the case.",
      case: updatedCase,
    });
  } catch (error) {
    console.error("Error assigning officer:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while assigning the officer.",
    });
  }
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
