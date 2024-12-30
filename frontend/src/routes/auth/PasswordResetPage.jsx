import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

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

function PasswordResetPage() {
  const [formData, setFormData] = useState({
    saId: "",
    password: "",
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
    <div className="min-h-screen bg-gray-100 mainContainer">
      <Navbar />
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Reset Password
        </h2>

      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <p>Enter the email address or username you use to sign in</p>
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.saId}
              onChange={handleChange}
              required
              pattern="\d{13}"
              title="Please enter Email address *"
            />
            {errors.saId && (
              <p className="mt-2 text-sm text-red-600">{errors.saId}</p>
            )}

            <div className="relative">
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={() => setShowPassword(!showPassword)}
              >
    
              </button>
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">{errors.password}</p>
            )}

            <div>
              <button
                type="submit"
                className="w-full mt-2 mb-3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get Password Reset Link
              </button>

              <p>
                {" "}
                <Link className="text-blue-400" to="/login">
                  {" "}
                  Back to Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PasswordResetPage;
