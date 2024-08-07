import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/loading');
  };

  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h3 style={{ color: 'red' }}>Login to </h3>
           <h2> Financial Advisor Information Tracker</h2>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          
          <button type="submit">Login</button>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
