import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NotFound from './components/NotFound.jsx';
import AboutComponent from './components/AboutComponent.jsx';
import SignupComponent from './components/SignupComponent.jsx';
import HomeComponent from './components/HomeComponent.jsx';
import ProductComponent from './components/ProductComponent.jsx';
import ProductDetailComponent from './components/ProductDetailComponent.jsx';
import LoginComponent from './components/LoginComponent.jsx';
import ContactComponent from './components/ContactComponent.jsx';

export default function AppRoutes() {

  return (
    <Routes>
      {/* Home route */}
      <Route path="/" element={<HomeComponent />} />

      {/* Product routes */}
      <Route path="/products" element={<ProductComponent />} />
      <Route path="/details" element={<ProductDetailComponent />} />

      {/* About route */}
      <Route path="/about" element={<AboutComponent />} />

      {/* Contact route */}
      <Route path="/contact" element={<ContactComponent />} />

      {/* Login route */}
      <Route path="/login" element={<LoginComponent />} />

      {/* Signup route */}
      <Route path="/register" element={<SignupComponent />} />

      {/* Not Found route */}
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}