import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // ✅ Validation logic
  const validateForm = () => {
    const newErrors = {};

    if (!email.includes("@")) {
      newErrors.email = "Valid email ivvandi";
    }

    if (password.length < 6) {
      newErrors.password = "Password minimum 6 characters undali";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle submit
  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log({
      email,
      password,
      rememberMe,
    });

    // Future: API call + redirect
  };

  // ✅ Button enable condition
  const isFormValid = email.includes("@") && password.length >= 6;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-96 space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Login</h2>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className={`border p-2 w-full rounded focus:outline-none ${
              errors.email ? "border-red-500" : "focus:ring-2 focus:ring-blue-500"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className={`border p-2 w-full rounded focus:outline-none ${
              errors.password
                ? "border-red-500"
                : "focus:ring-2 focus:ring-blue-500"
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password}
            </p>
          )}
        </div>

        {/* Remember Me */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className="text-sm">Remember Me</label>
        </div>

        {/* Show / Hide Password */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition"
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>

        {/* Login Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full p-2 rounded text-white transition ${
            isFormValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 opacity-50 cursor-not-allowed"
          }`}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
