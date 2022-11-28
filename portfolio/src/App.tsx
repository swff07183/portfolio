import React from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<div>index</div>} />
          <Route path="/home" element={<div>home</div>} />
          <Route path="/components" element={<div>components</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
