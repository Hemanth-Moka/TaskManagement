import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [isRegistering, setRegistering] = useState(false);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(true);  // State to control login visibility

  const toggleRegister = () => {
    setRegistering(true);
    setFullname('');
    setEmail('');
    setPassword('');
    setError('');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:2006/api/display?email=${email}`);
      const user = response.data;
      if (user.password === password) {
        if (user.role === 1) navigate("/admin");
        else if (user.role === 2) navigate("/landlord");
        else if (user.role === 3) navigate("/tenant");
        else setError("Invalid user role.");

        setShowLogin(false);  // Close login form after successful login

        // Navigate to the Dashboard after login (assuming it's `/dashboard`)
        navigate("/dashboard");
      } else {
        setError("Invalid password.");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2006/api/add', {
        fullname,
        email,
        password,
      });
      setRegistering(false);
      setShowLogin(false);  // Close login form after successful registration
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  if (!showLogin) return null;  // If the login form is not shown, return null

  return (
    <div className="d-content" onClick={(e) => e.stopPropagation()}>
      {error && <p className="error">{error}</p>}

      {!isRegistering ? (
        <form onSubmit={handleLoginSubmit}>
          <p className="form-title">Login</p>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="s-button">Login</button>
          <p>
            Don't have an account?{" "}
            <button type="button" onClick={toggleRegister} className="register-link">Register</button>
          </p>
        </form>
      ) : (
        <form onSubmit={handleRegisterSubmit}>
          <p className="form-title">Register</p>
          <input
            type="text"
            placeholder="Full Name"
            className="input-field"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="s-button">Register</button>
        </form>
      )}
    </div>
  );
};

export default Login;
