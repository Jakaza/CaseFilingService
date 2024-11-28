import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  register,
  validateCitizenRegistration,
  hasValidationErrors,
  validateLogin,
} from "../helpers/auth.helper.js";
import Citizen from "../models/citizenSchema.js";

export const registerCitizen = async (req, res) => {
  const { firstname, surname, email, contact, identity, birthdate, password } =
    req.body;
  try {
    const validationErrors = validateCitizenRegistration(req.body);
    if (hasValidationErrors(validationErrors)) {
      return res.status(400).json({ errors: validationErrors });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const citizenData = {
      firstname,
      surname,
      email,
      contact,
      identity,
      birthdate,
      password: hashedPassword,
    };

    register(citizenData, Citizen).then((response) => {
      return res
        .status(201)
        .json({ message: "User created successfully", user: response });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user!" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validationErrors = validateLogin(req.body);
    if (hasValidationErrors(validationErrors)) {
      return res.status(400).json({ errors: validationErrors });
    }

    let user = await Citizen.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid Credentials!" });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid Credentials!" });

    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: false,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        // secure:true,
        maxAge: age,
      })
      .status(200)
      .json(userInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to login!" });
  }
};
