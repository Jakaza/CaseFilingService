import Officer from "../models/officerSchema.js";
import bcrypt from "bcrypt";
import {
  hasValidationErrors,
  register,
  validateCitizenRegistration,
} from "../helpers/auth.helper.js";

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
