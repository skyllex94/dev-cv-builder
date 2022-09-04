import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import { useLocation } from "react-router-dom";

function DisplaySummary(props) {
  // Template settings
  const location = useLocation();
  const { template } = location.state;

  return template === "earth" ? (
    <Row className={props.name + " mt-3 text-start"}>
      <Col md={12} className="paragraphsGroup"></Col>
    </Row>
  ) : template === "venus" ? (
    <Row className={props.name + " mt-3 text-start"}>
      <Col
        md={12}
        className="paragraphsGroup text-white mb-0"
        style={{
          fontStyle: "italic",
          fontSize: 14,
          fontWeight: 300,
        }}
      ></Col>
    </Row>
  ) : null;
}

export default DisplaySummary;
