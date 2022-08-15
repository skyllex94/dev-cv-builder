import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";

import { useLocation } from "react-router-dom";

function DisplaySummary() {
  // Template settings
  const location = useLocation();
  const { template } = location.state;

  return template === "earth" ? (
    <Row className="summaryField mt-3">
      <Col md={12}>
        <p className="textSummary mb-0"></p>
      </Col>
    </Row>
  ) : template === "venus" ? (
    <Row className="summaryField mt-3">
      <Col md={12} style={{ fontStyle: "italic", fontSize: 15 }}>
        <p className="textSummary mb-0"></p>
      </Col>
    </Row>
  ) : null;
}

export default DisplaySummary;
