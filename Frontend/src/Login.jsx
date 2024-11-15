import React, { useState } from "react";
import "./Login.css"; // Custom CSS for styling
import goimage from "./images.png";

function Login() {
  const [role, setRole] = useState("");
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleInputChange = (event) => {
    setEmailOrUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmailOrUsername = (value) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmailOrUsername(emailOrUsername)) {
      console.log("Valid email");
    } else {
      console.log("Treating as username");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Login to continue</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={emailOrUsername}
            onChange={handleInputChange}
            required
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="login-input password-input"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
              aria-label="Toggle password visibility"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <select
            className="login-dropdown"
            value={role}
            onChange={handleRoleChange}
          >
            <option value="" disabled className="role">
              Select your role
            </option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            <option value="Super Admin">Super Admin</option>
          </select>

          <a href="" className="forget">
            Forget Password?
          </a>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="divider">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        <div className="social-login">
          <button className="social-button google">
            <img src={goimage} className="social-logo" alt="Google logo" />
            Continue with Google
          </button>
          <button className="social-button facebook">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook logo"
              className="social-logo"
            />
            Continue with Facebook
          </button>
          <button className="social-button apple">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple logo"
              className="social-logo"
            />
            Continue with Apple
          </button>
        </div>

        <div className="login-footer">
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="signup-link">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
