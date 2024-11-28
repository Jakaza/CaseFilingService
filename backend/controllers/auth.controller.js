import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import register from "../helpers/auth.helper.js";
import Citizen from '../models/citizenSchema.js'

export const registerCitizen = async (req, res) => {
    const { firstname, surname , email, contact , identity , birthdate , password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const citizenData = {
        firstname, surname , email, contact , identity , birthdate , password : hashedPassword
      }

      res.json(citizenData);

      register(citizenData, Citizen).then((response) => {
        console.log(response);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to create user!" });
    }
};

