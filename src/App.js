import React, { useState } from 'react';

import Aboutus from "./PortfolioContainer/AboutMe/About";

import Home from "./PortfolioContainer/Home/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Skills } from "./PortfolioContainer/Skills/Skills";
import Contact from "./PortfolioContainer/ContactMe/Contact";
import { ToastContainer } from 'react-toastify';
import Project from './PortfolioContainer/Project/Project';


function App() {
    const [theme, setTheme] = useState('light'); // Define 'theme' and set default value
  
  return (
    <div  id={theme}>
    <ToastContainer />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
