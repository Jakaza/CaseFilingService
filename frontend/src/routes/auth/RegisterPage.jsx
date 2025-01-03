import React, { useState } from "react";
import "./registerPage.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest.js"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Navbar from "../../components/navbar/Navbar.jsx";

const MySwal = withReactContent(Swal);

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


const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    email: "",
    contact: "",
    identity: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^\d{13}$/.test(formData.identity)) {
      newErrors.identity = "SA ID must be a 13-digit number";
    }

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (validateForm()) {
    
      try {
        const res = await apiRequest.post("/auth/register", formData  );
        if(res.data.user.success == true){
          MySwal.fire({
            title: <strong>Success!</strong>,
            html: <p>Your account has been successfully created.</p>,
            icon: 'success',
          }).then(() => {
            navigate("/login");
          });
        }
      } catch (err) {

        console.log(err);
        
      } finally {

        console.log("STOP LOADING");
        
      }
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 mainContainer">
      <Navbar/>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register for Police Services
        </h2>

        <p className="text-center mt-2">
          <small>
            When you sign up, our{" "}
            <a className="text-red-500" href="/terms">
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
              name="firstname"
              value={formData.firstname}
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
              name="identity"
              value={formData.identity}
              onChange={handleChange}
              required
              pattern="\d{13}"
              title="Please enter a valid 13-digit SA ID number"
            />
            {errors.identity && (
              <p className="mt-2 text-sm text-red-600">{errors.identity}</p>
            )}

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

    </div>
  );
}

export default RegisterPage;
