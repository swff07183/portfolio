import React from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<div>index</div>} />
        <Route path="/components" element={<div>components</div>} />
      </Routes>
    </Router>
  );
}

export default App;
