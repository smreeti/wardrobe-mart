import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page.jsx';

// JSX element that contains the Router and Page components
const element = (
  <Router>
    <Page />
 </Router>
);

// root for rendering using ReactDOM's createRoot method
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the JSX element within the root
root.render(element);