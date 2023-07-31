import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Page from './Page.jsx';

const element = (
  <Router>
    <Page />
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);