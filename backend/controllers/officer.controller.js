import Officer from "../models/officerSchema.js";
import bcrypt from "bcrypt";
import {
  hasValidationErrors,
  register,
  validateCitizenRegistration,
} from "../helpers/auth.helper.js";
import Case from "../models/caseSchema.js";
import { sendMessage } from "../services/nodemailer.js";

function generatePassword() {
  const chars =
    "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm1234567890";
  let password = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);

    password += chars[randomIndex];
  }

  return password;
}

function generateBadgeNumber() {
  return `BN-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

export const registerCitizen = async (req, res) => {
  const { firstname, surname, email, phone, rank, role, province, township } =
    req.body;
  try {
    const password = generatePassword();
    const badgeNumber = generateBadgeNumber();

    const hashedPassword = await bcrypt.hash(password, 10);
    const officerData = {
      firstname,
      surname,
      email,
      phone,
      rank,
      role,
      province,
      township,
      badgeNumber: badgeNumber,
      password: hashedPassword,
    };

    register(officerData, Officer).then((response) => {
      // Will Send Email or SMS to officer here
      officerData.pass = password;
      officerData.type = "addOfficer"
      officerData.subject = "Welcome to the SAP System – Your Login Details"
      sendMessage(officerData)
      console.log(`Generated password for ${email} : ${password}`);
      return res
        .status(201)
        .json({ message: "User created successfully", user: response });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user!" });
  }
};

export const getAllOfficers = async (req, res) => {
  try {
       // Fetch all officers
       const officers = await Officer.find();

       // Fetch cases for each officer
       const officersWithCases = await Promise.all(
         officers.map(async (officer) => {
           const assignedCases = await Case.find({ assignedOfficer: officer._id });
           return { ...officer.toObject(), cases: assignedCases };
         })
       );
   
       return res.status(200).json({
         message: "Officers successfully fetched",
         officers: officersWithCases,
       });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user!" });
  }
};
