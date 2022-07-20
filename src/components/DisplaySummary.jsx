import React from "react";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";

function DisplaySummary() {
  return (
    <Col md={12} className="summaryField d-flex d-none">
      <Form.Label className="textSummary"></Form.Label>
    </Col>
  );
}

export default DisplaySummary;
