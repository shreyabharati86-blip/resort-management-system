import { useState } from "react";
import "./Registration.css";

function Registration() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Check empty fields
    if (
      !form.name ||
      !form.phone ||
      !form.email ||
      !form.username ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill all fields.");
      return;
    }

    // Mobile validation
    if (!/^[0-9]{10}$/.test(form.phone)) {
      setError("Mobile number must contain exactly 10 digits.");
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Strong password validation
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,}$/.test(
        form.password
      )
    ) {
      setError(
        "Password must have 8 characters, uppercase, lowercase, number and special character."
      );
      return;
    }

    // Confirm password
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSuccess("Registration successful!");

    console.log(form);
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <h1>Royal Haven</h1>
        <p>Create your account</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="register-input"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            className="register-input"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="register-input"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="username"
            placeholder="Create Username"
            className="register-input"
            value={form.username}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            className="register-input"
            value={form.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="register-input"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          {error && <div className="form-error">{error}</div>}

          {success && <div className="form-success">{success}</div>}

          <button type="submit" className="register-btn">
            Register
          </button>

        </form>

        <p className="login-text">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

      </div>

    </div>
  );
}

export default Registration;