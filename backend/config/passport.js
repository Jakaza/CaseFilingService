import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import Citizen from "../models/citizenSchema.js";

// Cookie Extractor Helper
const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["token"];
  }
  return token;
};

// Passport Configuration
export const configurePassport = (passport) => {
  const opts = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.JWT_SECRET_KEY,
  };

  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        const user = await Citizen.findById(jwt_payload.id);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (error) {
        console.error("Passport error:", error);
        return done(null, false);
      }
    })
  );
};
