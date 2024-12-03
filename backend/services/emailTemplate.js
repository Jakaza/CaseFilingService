
export function registrationTemplate() {
    return `
    <h1>Welcome to Our Platform</h1>
    <p>Dear ${first_name} ${last_name},</p>
    <p>Your account has been successfully created. Here are your details:</p>
    <p><strong>Identification Number:</strong> ${identification_number}</p>
    <p><strong>Role:</strong> ${user_role}</p>
    <p>Thank you for joining us!</p>
  `;
}

export function caseNumberTemplate(caseNumber) {
    return `
      <h1>Your Case Has Been Created</h1>
      <p>Your case has been successfully reported. Below are the case details:</p>
      <p><strong>Case Number:</strong> ${caseNumber}</p>
      <p>Thank you for reporting the incident.</p>
    `;
  }

export function passwordResetTemplate() {
    return `
      <h1>Password Reset Request</h1>
      <p>If you requested to reset your password, please follow the link below to reset it:</p>
      <p><a href="https://yourapp.com/reset-password">Reset Your Password</a></p>
      <p>If you did not request a password reset, please ignore this email.</p>
    `;
}
  