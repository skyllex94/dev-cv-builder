import React from "react";
import Button from "react-bootstrap/esm/Button";

import "../index.css";

import BeautifulAccordion from "./BeautifulAccordion";

function ControlPanel({ handlePrint }) {
  return (
    <div className="control-panel">
      <BeautifulAccordion />

      <div className="d-grid gap-2">
        <Button variant="outline-dark mt-4 mb-3" onClick={handlePrint}>
          Download PDF
        </Button>
      </div>
    </div>
  );
}

export default ControlPanel;
