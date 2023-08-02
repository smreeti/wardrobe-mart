import React, { useState } from 'react';

const ContactUsFormComponent = () => {
    const initialFormData = {
        name: '',
        email: '',
        message: '',
      };
    
      const [formData, setFormData] = useState(initialFormData);
      const [formErrors, setFormErrors] = useState({});
      const [isSuccess, setIsSuccess] = useState(false); 

      const validateForm = () => {
        let errors = {};
    
        if (!formData.name.trim()) {
          errors.name = 'Name is required';
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
          errors.name = 'Name can only contain letters and spaces';
        } else if (/\d/.test(formData.name)) {
          errors.name = 'Name cannot contain numbers';
        }
    
        if (!formData.email.trim()) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Invalid email address';
        }
    
        if (!formData.message.trim()) {
          errors.message = 'Message is required';
        }
    
        return errors;
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
        setFormErrors({});

        if (name === 'name' && /\d/.test(value)) {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            name: 'Name cannot contain numbers',
          }));
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
    
        if (Object.keys(errors).length === 0) {
          console.log(formData);
          setFormData(initialFormData); 
          setIsSuccess(true);
        } else {
          setFormErrors(errors);
        }
      };
    
      return (
        <div className="container">
          <h2>Contact Us</h2>
          {isSuccess && ( // Render dismissive message if isSuccess is true
        <div className="alert alert-success mt-3" role="alert">
          Your message has been sent successfully!
        </div>
      )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
            </div>
            <div className="form-group mt-3">
              <label htmlFor="message">Message:</label>
              <textarea
                className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      );
    };
    
export default ContactUsFormComponent;
