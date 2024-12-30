import Officer from "../models/officerSchema.js";
import {
  hasValidationErrors,
  register,
  validateCitizenRegistration,
} from "../helpers/auth.helper.js";

function generatePassword() {
  return password;
}

export const registerCitizen = async (req, res) => {
  const { firstname, surname, email, phone, rank, role, province, township } =
    req.body;
  try {
    const validationErrors = validateCitizenRegistration(req.body);
    if (hasValidationErrors(validationErrors)) {
      return res.status(400).json({ errors: validationErrors });
    }

    const password = generatePassword();

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
