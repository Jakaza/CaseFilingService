import React, { useState } from "react";
import "./registerPage.css";
// import { ChevronRight } from 'react-icons/md';
import { FaChevronRight, FaPhoneSquareAlt } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
  pattern,
  title,
}) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      pattern={pattern}
      title={title}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    contact: "",
    saId: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate SA ID (assuming it's a 13-digit number)
    if (!/^\d{13}$/.test(formData.saId)) {
      newErrors.saId = "SA ID must be a 13-digit number";
    }

    // Validate password (at least 8 characters, 1 uppercase, 1 lowercase, 1 number)
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    }

    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with registration
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your backend
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register for Police Services
        </h2>

        <p className="text-center mt-2">
          <small>
            When you sign up, our{" "}
            <a className="text-red-500" href="">
              Terms and Privacy Policy
            </a>{" "}
            will apply.
          </small>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <InputField
              label="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <InputField
              label="Surname"
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />

            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <InputField
              label="Contact"
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
            />

            <InputField
              label="SA ID"
              type="text"
              name="saId"
              value={formData.saId}
              onChange={handleChange}
              required
              pattern="\d{13}"
              title="Please enter a valid 13-digit SA ID number"
            />
            {errors.saId && (
              <p className="mt-2 text-sm text-red-600">{errors.saId}</p>
            )}

            <InputField
              label="Date of Birth"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />

            <div className="relative">
              <InputField
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEye className="h-6 w-6 text-gray-700" />
                ) : (
                  <FaEyeSlash className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">{errors.password}</p>
            )}

            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-red-600">
                {errors.confirmPassword}
              </p>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register
              </button>
              <p className="text-center mt-2">
                {" "}
                Already have a account?{" "}
                <Link className="text-blue-400" to="/login">
                  {" "}
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
