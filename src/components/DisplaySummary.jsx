import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function DisplaySummary() {
  return (
    <Row className="summaryField d-none d-flex">
      <Col md={12}>
        <p className="textSummary"></p>
      </Col>
    </Row>
  );
}

export default DisplaySummary;
