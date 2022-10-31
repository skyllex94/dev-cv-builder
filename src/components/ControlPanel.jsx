import React from "react";
import "../index.css";
import Button from "react-bootstrap/esm/Button";
import BeautifulAccordion from "./BeautifulAccordion";

function ControlPanel({ handlePrint }) {
  return (
    // <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
    <div className="control-panel" id="actionBox">
      <BeautifulAccordion />

      <div className="d-grid gap-2">
        <Button variant="outline-dark mt-4 mb-3" onClick={handlePrint}>
          Download PDF
        </Button>
      </div>
    </div>
    // </OverlayTrigger>
  );
}

export default ControlPanel;
