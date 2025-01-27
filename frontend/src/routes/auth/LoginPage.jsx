import React, { useContext, useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "./../../context/AuthContext";
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

function LoginPage() {
  const { currentUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    identity: "",
    password: "",
  });

  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    setServerErrors("");
    setErrors({});
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerErrors("");
    updateUser(null);
    if (validateForm()) {
      setLoading(true); // Set loading to true
      try {
        const res = await apiRequest.post("/auth/login", formData);
        updateUser(res.data);
        navigate("/");
      } catch (error) {
        if (error.code === "ERR_BAD_REQUEST" && error.response.status === 400) {
          setServerErrors(error.response.data.message);
        }
        console.log(error);
      } finally {
        setLoading(false); // Set loading back to false
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 mainContainer">
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign In for Police Services
          </h2>

          <p className="text-center">
            <small>
              When you sign up, our{" "}
              <a className="text-blue-500" href="/terms">
                Terms and Privacy Policy
              </a>{" "}
              will apply.
            </small>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {serverErrors && (
                <p className="mt-2 text-center text-sm text-red-600">
                  {serverErrors}
                </p>
              )}

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

              <div>
                <p>
                  <Link to="/password-reset" className="text-blue-400 ">
                    Forgot password?
                  </Link>
                </p>

                <button
                  type="submit"
                  className={`w-full mt-2 mb-3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    loading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

                <p>
                  {" "}
                  Don't have an account?{" "}
                  <Link className="text-blue-400" to="/register">
                    {" "}
                    Register
                  </Link>
                </p>

                <p className="text-center py-4">OR</p>

                <p className="text-center">
                  <Link to="/admin-login" className="text-blue-400 ">
                    <strong> Login As Officer / Supervisour or Admin</strong>
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

export default LoginPage;
