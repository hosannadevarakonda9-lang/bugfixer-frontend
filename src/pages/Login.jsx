import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!email.includes("@")) {
      newErrors.email = "Valid email enter cheyyi";
    }

    if (password.length < 6) {
      newErrors.password = "Password minimum 6 characters undali";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true); // ✅ Start loading

    // Simulate API call (1 second delay)
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      }

      setLoading(false); // ✅ Stop loading
      navigate("/dashboard");
    }, 1000);
  };

  const isFormValid = email.includes("@") && password.length >= 6;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-96 space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Login</h2>

        {/* Email Input - Using Reusable Component */}
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          placeholder="Enter your email"
        />

        {/* Password Input - Using Reusable Component */}
        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          placeholder="Enter your password"
        />

        {/* Remember Me */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4"
          />
          <label className="text-sm text-gray-700">Remember Me</label>
        </div>

        {/* Show/Hide Password Toggle */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition text-sm"
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>

        {/* Login Button */}
        <button
          type="submit"
          disabled={!isFormValid || loading} // ✅ Disable during loading
          className={`w-full p-2 rounded text-white transition flex items-center justify-center gap-2 ${isFormValid && !loading
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 opacity-50 cursor-not-allowed"
            }`}
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;