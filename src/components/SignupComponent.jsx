import React, { useState } from 'react';

const SignupComponent = () => {
  // Initialize state for signup form data
  const [signupFormData, setSignupFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle input change events
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData({
      ...signupFormData,
      [name]: value,
    });
  };

  // Handle signup form submission
  const handleSignupSubmit = (e) => {
    e.preventDefault();

    console.log('Signing up...');
    console.log(signupFormData);
  };

  return (
    <div className="container-signup">
      <div className="form-wrapper">
        <h1>Signup</h1>
        <form onSubmit={handleSignupSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={signupFormData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={signupFormData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={signupFormData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className='btnClass'>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
