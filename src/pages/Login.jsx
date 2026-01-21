import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ Validation Logic
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


  // ✅ Clean & readable function name
  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // API integration will be added later
  };

  // ✅ Button enable / disable condition
  const isFormValid =
    email.includes("@") && password.length >= 6;

    console.log(errors)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-96 space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Login</h2>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full rounded"
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
          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password}
            </p>
          )}
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full p-2 rounded text-white transition
            ${
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
