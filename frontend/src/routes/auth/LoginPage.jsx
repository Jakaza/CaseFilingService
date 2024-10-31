import React from "react";

function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register for Police Services
        </h2>

        <p className="text-center">
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
                  <FaEyeSlash className="h-6 w-6 text-gray-700" />
                ) : (
                  <FaEye className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">{errors.password}</p>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Login
              </button>
              <p>
                {" "}
                Already have a profile? <Link to="login"> Sign in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
