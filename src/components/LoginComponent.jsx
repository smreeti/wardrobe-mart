import React, { useState } from 'react';

const LoginComponent = () => {
  // Initialize state for login form data
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  // Handle input change events
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    console.log('Logging in...');
    console.log(loginFormData);
  };

  return (
    <div className="container-login">
      <div className="form-wrapper">
        <h1>Login</h1>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginFormData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginFormData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className='btnClass'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
