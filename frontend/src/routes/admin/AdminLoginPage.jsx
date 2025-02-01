import React, { useContext, useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";

const InputField = ({ label, type, name, value, onChange, required, title }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      title={title}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

function AdminLoginPage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const res = await apiRequest.post("/auth/admin-login", formData);
      updateUser(res.data);
      navigate("/admin");
    } catch (error) {
      setErrors({ api: "Invalid credentials. Please try again." });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 mainContainer">
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign In To Access Dashboard
          </h2>
          <p className="text-center">
            <small>
              By signing in, you agree to our
              <Link className="text-red-500" to="/terms"> Terms and Privacy Policy</Link>.
            </small>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                title="Enter a valid email"
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

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
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye className="h-6 w-6 text-gray-700" /> : <FaEyeSlash className="h-6 w-6 text-gray-700" />}
                </button>
              </div>
              {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
              {errors.api && <p className="text-red-600 text-sm">{errors.api}</p>}

              <div>
                <Link to="/password-reset" className="text-blue-400">Forgot password?</Link>
                <button
                  type="submit"
                  className="w-full mt-2 mb-3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Login
                </button>
                <p>
                  Don't have an account?
                  <Link className="text-blue-400" to="/register"> Register</Link>
                </p>
                <p className="text-center py-4">OR</p>
                <p className="text-center">
                  <Link to="/login" className="text-blue-400">
                    <strong>Login As Client</strong>
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

export default AdminLoginPage;