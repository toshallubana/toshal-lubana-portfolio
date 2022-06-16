import React from 'react';
import { createRoot }  from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import SideMenu from "./components/SideMenu/SideMenu";
// import About from "./components/About/About";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Contact from "./components/Contact/Contact";
import './assets/_base.scss';
import './index.scss';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <SideMenu />
    <Routes>
      <Route path="/personal-portfolio" element={<Landing />} />
      {/* <Route path="/personal-portfolio/about" element={<About />} />
      <Route path="/personal-portfolio/portfolio" element={<Portfolio />} />
      <Route path="/personal-portfolio/contact" element={<Contact />} /> */}
    </Routes>
  
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
