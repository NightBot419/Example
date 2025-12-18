import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import adminCredentials from '../data/admin.json';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === adminCredentials.username && password === adminCredentials.pass) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Fooder</h1>
        <p>Quản lý cửa hàng của bạn ngay</p>
      </div>
      <div className="login-right">
        <div className="login-form">
          <h2>Hello Again!</h2>
          <p>Welcome Back</p>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Admin</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
