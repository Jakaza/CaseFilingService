import nodemailer from "nodemailer";
import { 
  emailTemplateRegistration, 
  emailTemplateCaseAssignAlert,
  emailTemplateOpenCase
} from "./emailTemplate.js";

export async function sendMessage(userCredential) {
  try {
    // Select the appropriate email template based on type
    let emailTemplate;
    switch (userCredential.type) {
      case "addOfficer":
        emailTemplate = emailTemplateRegistration(userCredential);
        break;
      case "assignCase":
        emailTemplate = emailTemplateCaseAssignAlert(userCredential);
        break;
      case "openCase":
        emailTemplate = emailTemplateOpenCase(userCredential)
        break;
      case "Register":
        // emailTemplate = emailTemplateRegistration(userCredential);
        break;
      default:
        console.error("Unknown email type:", userCredential.type);
        return false;
    }

    // Create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.APP_USER, // email
        pass: process.env.APP_PASSWORD, // app password
      },
    });

    // Send user's message
    let info = await transporter.sendMail({
      sender: `${userCredential.email}`,
      from: `${userCredential.email}`, // sender address
      to: process.env.APP_USER,
      replyTo: `${userCredential.email}`,
      subject: `${userCredential.subject}`, // Subject line
    });

    // Send confirmation email with the appropriate template
    info = await transporter.sendMail({
      sender: process.env.APP_USER,
      from: process.env.APP_USER, // sender address
      to: `${userCredential.email}`,
      replyTo: process.env.APP_USER,
      subject: `${userCredential.subject}`, // Subject line
      html: emailTemplate, // Use the selected email template
    });

    return true; // Return true if email was sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Return false if an error occurred while sending email
  }
}
