import passport from "passport";
import Complaint from "../models/complaintSchema.js";

export const open = async (req, res, next) => {
  passport.authenticate("jwt", { session: false }, async (err, user, info) => {
    if (err) {
      return res.status(500).json("Server Error Try Again");
    }

    
    if (!user) {
      return res.json({ message: "Not Atheticated to open case" });
    }
    const {
        complaintType,
        complaintDescription,
        isAnonymous
    } = req.body;

    const complaintNumber =  generateCaseNumber();

    const complaintData = {
      complaintType,
      complaintDescription,
      citizen: user._id,
      isAnonymous: isAnonymous,
      complaintNumber : complaintNumber
    };

    try {
        const newReport = new Complaint(complaintData);
        const response =  await newReport.save()

        return res.status(201).json({ response: response, success: true });
    } catch (error) {
        console.log(error);
        
        return res.status(401).json({ response: err , success: false });
    }

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
    requestCloseCase(closeReasonData, Case, CloseReason).then((response) => {
      return res.status(201).json({ response: response });
    }).catch(err =>{
      console.log(err);
      
      return res.status(401).json({ response: err , success: false });
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
    
    viewCases(user._id , Case).then((response) => {
      return res.status(201).json({ response: response });
    }).catch(err =>{
      return res.status(401).json({ response: err , success: false });
    });
  })(req, res, next);
};



function generateCaseNumber(){
  const today = new Date();
  const year = today.getFullYear();
  const date = today.getDate().toString().padStart(2, '0')

  const randomLetters = Array.from({length: 4}, ()=> 
    String.fromCharCode(65 + Math.floor(Math.random() * 26))
  ).join('')

  const caseNumber = `${year}${date}${randomLetters}`
  return caseNumber;
}