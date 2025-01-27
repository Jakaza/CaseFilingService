// import nodemailer from "nodemailer"
import { caseNumberTemplate, passwordResetTemplate } from "./emailTemplate.js";

async function sendMessage({
  first_name,
  last_name,
  identification_number,
  email,
  user_role,
  subject,
  emailType,
  caseNumber,
}) {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.APP_USER,
        pass: process.env.APP_PASSWORD,
      },
    });

    let emailContent = "";
    switch (emailType) {
      case "caseNumber":
        emailContent = caseNumberTemplate(caseNumber);
        break;
      case "passwordReset":
        emailContent = passwordResetTemplate();
        break;
      default:
        emailContent = "<p>Thank you for your action!</p>";
    }

    let info = await transporter.sendMail({
      sender: `${email}`,
      from: `${email}`,
      to: process.env.APP_USER,
      replyTo: `${email}`,
      subject: `${subject}`,
    });

    // Send confirmation email to user
    info = await transporter.sendMail({
      sender: process.env.APP_USER,
      from: process.env.APP_USER,
      to: `${email}`, // User email
      replyTo: process.env.APP_USER, // Reply address
      subject: `${subject}`,
      html: `${emailContent}`,
    });

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

export default sendMessage;
