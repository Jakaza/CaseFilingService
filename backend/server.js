import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import caseRoute from "./routes/case.route.js";
import reportRoute from "./routes/report.route.js";
import complaintRoute from "./routes/complaints.route.js";
// import testRoute from "./routes/test.route.js";
// import userRoute from "./routes/user.route.js";
// import chatRoute from "./routes/chat.route.js";
// import messageRoute from "./routes/message.route.js";

dotenv.config();
const app = express();

import { initDb } from "./config/initDb.js";
import { configurePassport } from "./config/passport.js";

initDb();

// app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

configurePassport(passport);
app.use(passport.initialize());


app.get("/api/users", (req , res)=>{
  res.json([{
    name: "Jakaza",
    age: 12
  },{
    name: "Khensani",
    age: 12
  },{
    name: "Nsovo",
    age: 12
  },])
});

app.use("/api/auth", authRoute);
app.use("/api/case", caseRoute);
app.use("/api/report", reportRoute);
app.use("/api/complaint", complaintRoute);
// app.use("/api/posts", postRoute);
// app.use("/api/test", testRoute);
// app.use("/api/chats", chatRoute);
// app.use("/api/messages", messageRoute);

const PORT = process.env.PORT || 8801;

app.listen(PORT, () => {
  console.log("Server is running! at ", PORT);
});
