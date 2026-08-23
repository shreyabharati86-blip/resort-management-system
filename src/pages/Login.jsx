import { useState } from "react";
import "./Login.css";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // Check empty fields
    if (!username || !password || !role) {
      setError("Please fill all fields.");
      return;
    }

    // Demo login details
    const users = {
      admin: {
        username: "admin",
        password: "Admin@123"
      },

      manager: {
        username: "manager",
        password: "Manager@123"
      },

      staff: {
        username: "staff",
        password: "Staff@123"
      },

      user: {
        username: "user",
        password: "User@123"
      }
    };

    const selectedUser = users[role];

    // Check role
    if (!selectedUser) {
      setError("Invalid role.");
      return;
    }

    // Check username
    if (username !== selectedUser.username) {
      setError("Invalid username.");
      return;
    }

    // Check password
    if (password !== selectedUser.password) {
      setError("Invalid password.");
      return;
    }

    // Login successful
    if (role === "admin") {
      window.location.href = "/admin-dashboard";
    }

    else if (role === "manager") {
      window.location.href = "/manager-dashboard";
    }

    else if (role === "staff") {
      window.location.href = "/staff-dashboard";
    }

    else if (role === "user") {
      window.location.href = "/user-dashboard";
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Royal Haven</h1>

        <p>Resort Management System</p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Enter Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select
            className="login-input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >

            <option value="">Login as</option>

            <option value="user">
              User
            </option>

            <option value="admin">
              Admin
            </option>

            <option value="manager">
              Manager
            </option>

            <option value="staff">
              Staff
            </option>

          </select>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

        <p className="register-text">
          New User?
          <a href="/register"> Register</a>
        </p>

      </div>

    </div>
  );
}

export default Login;