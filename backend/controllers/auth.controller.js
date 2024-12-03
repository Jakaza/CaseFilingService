import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from 'crypto';

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
  const { identity, password } = req.body;
  
  try {
    const validationErrors = validateLogin(req.body);
    if (hasValidationErrors(validationErrors)) {
      return res.status(400).json({ errors: validationErrors });
    }

    let user = await Citizen.findOne({ identity });
    if (!user) return res.status(400).json({ message: "Invalid Identity Number!" });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(400).json({ message: "Wrong Password Entered !" });

    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: false,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        // secure:true,
        maxAge: age,
      })
      .status(200)
      .json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to login!" });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};

export const requestPasswordReset = async (req, res) => {
  const { email, userType } = req.body;

  try {
    const userModel = userType === 'Citizen' ? Citizen : Officer;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'No account associated with this email.' });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    const expirationTime = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    await PasswordReset.create({
      userId: user._id,
      userType,
      resetToken: hashedToken,
      expiresAt: expirationTime,
    });

    const resetLink = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    // TODO::Send reset email logic here 

    res.status(200).json({ message: 'Password reset link sent successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to send password reset link.' });
  }
};

export const resetPassword = async (req, res) => {
  const { token, newPassword, userType } = req.body;

  try {
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const passwordResetRecord = await PasswordReset.findOne({
      resetToken: hashedToken,
      expiresAt: { $gt: Date.now() },
      userType,
    });

    if (!passwordResetRecord) {
      return res.status(400).json({ message: 'Invalid or expired reset token.' });
    }

    const userModel = userType === 'Citizen' ? Citizen : Officer;
    const user = await userModel.findById(passwordResetRecord.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    // Delete reset token after successful password reset
    await PasswordReset.deleteOne({ _id: passwordResetRecord._id });

    res.status(200).json({ message: 'Password reset successful.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to reset password.' });
  }
};


