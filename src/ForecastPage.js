// ForecastPage.js

import React from "react";
import "./App.css";
import Footer from "./Footer";

function ForecastPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Previziune PowerBi Report</h2>
        <div className="responsive-iframe-container-forcast">
          <div className="footer-overlay-Forcast"></div>
          <iframe
            title="Power BI Report"
            src="https://app.powerbi.com/view?r=eyJrIjoiY2M5YzY3OGItZjcyMC00YWIyLThmYmEtOWFjM2JmYWM2ZTM1IiwidCI6IjcxOWM2ZjFmLTliZDItNDc4ZC1iYTIyLTI2MzdlMTVkMmY4YSIsImMiOjh9"
            allowFullScreen="true"
          ></iframe>
        </div>
      </header>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default ForecastPage;
