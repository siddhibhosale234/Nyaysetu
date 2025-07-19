import React, { useState } from 'react';
import './Signup.css'; // Optional: move styles here if needed

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
    } else {
      setError('');
      alert('Registration successful!');
      // You can add actual logic to send the data to your backend here
    }
  };

  return (
    <div className="form-container">
      <img className="logoimg" src="./logo.jpg" alt="Logo" />

      <form onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>

        <input
          type="text"
          id="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Register</button>
       <p className="login-text">
  Already have an account? <button onClick={() => alert('Go to login')} className="link-button">Login</button>
</p>

      </form>
    </div>
  );
};

export default Signup;
