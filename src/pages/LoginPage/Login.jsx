import React, { useState, useEffect } from "react";
import "./Login.css";
import GoogleAuth from "../../components/Submission/GoogleAuth";
import { useNavigate } from "react-router-dom";

const Login = ({ isAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (password.trim() === "") {
      alert("Please enter a password");
      return;
    }
    // perform login action
  };

  const EmailInput = () => {
    return (
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
    );
  };

  const PasswordInput = () => {
    return (
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="title"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
    );
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <h1>Login to your Account</h1>
        <EmailInput />
        <PasswordInput />
        <button type="submit" aria-label="Login">
          Login
        </button>
        <GoogleAuth />
      </form>
    </div>
  );
};

export default Login;
