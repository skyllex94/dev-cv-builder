import React from "react";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function DisplaySummary() {
  return (
    <Row className="summaryField d-none d-flex">
      <Col md={12}>
        <Form.Label className="textSummary"></Form.Label>
      </Col>
    </Row>
  );
}

export default DisplaySummary;
