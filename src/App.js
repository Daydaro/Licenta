import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HistoryPage from "./HistoryPage";
import ForecastPage from "./ForecastPage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import LogIn from "./LogIn";

import "./App.css";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ForecastPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
