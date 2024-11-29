import validator from "validator";

export async function register(data, Model) {
  try {
    const newUser = new Model(data);

    const savedRecord = await newUser.save();

    return {
      success: true,
      message: "Registration successful",
      data: savedRecord,
    };
  } catch (error) {
    return {
      success: false,
      message: "Registration failed",
      error: error.message,
    };
  }
}

export const validateCitizenRegistration = (data) => {
  const errors = {};

  if (!data.firstname || !validator.isAlpha(data.firstname)) {
    errors.firstname = "Firstname is required and must contain only letters.";
  }

  if (!data.surname || !validator.isAlpha(data.surname)) {
    errors.surname = "Surname is required and must contain only letters.";
  }

  if (!data.email || !validator.isEmail(data.email)) {
    errors.email = "A valid email is required.";
  }

  if (!data.contact || !validator.isMobilePhone(data.contact, "any")) {
    errors.contact = "A valid phone number is required.";
  }

  if (!data.identity || !/^\d{13}$/.test(data.identity)) {
    errors.identity = "Identity number must be 13 digits.";
  }

  if (!data.password || data.password.length < 8) {
    errors.password = "Password is required and must be at least 8 characters.";
  }

  return errors;
};

export const validateLogin = (data) => {
  const errors = {};

  if (!data.identity) {
    errors.identity = "A valid identity number is required.";
  }

  if (!data.password || data.password.length < 8) {
    errors.password = "Password is required and must be at least 8 characters.";
  }

  return errors;
};

export const hasValidationErrors = (errors) => {
  if (Object.keys(errors).length > 0) {
    return true;
  }

  return false;
};
