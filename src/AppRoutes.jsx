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
      <Route path="/" element={<HomeComponent />} />
      <Route path="/products" element={<ProductComponent/>} />
      <Route path="/details" element={<ProductDetailComponent/>} />

      <Route path="/about" element={<AboutComponent />} />
      <Route path="/contact" element={<ContactComponent />} />

      <Route path="/login" element={<LoginComponent />} />
      <Route path="/register" element={<SignupComponent />} />

      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}