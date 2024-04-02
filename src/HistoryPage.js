// HistoryPage.js

import React from "react";
import "./App.css";
import Footer from "./Footer";

function HistoryPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Istoric PowerBi Report</h2>
        <div className="responsive-iframe-container">
          <div className="footer-overlay"></div>
          <iframe
            title="Power BI Report"
            src="https://app.powerbi.com/reportEmbed?reportId=7c6875c5-8844-47af-a220-267302350efe&autoAuth=true&ctid=719c6f1f-9bd2-478d-ba22-2637e15d2f8a"
            allowFullScreen="true"
          ></iframe>
        </div>
      </header>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default HistoryPage;
