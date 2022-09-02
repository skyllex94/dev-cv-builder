import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { HorizontalLine } from "../../utils/Utils";

function DisplayLanguages() {
  return (
    <Row className="languagesField mt-3">
      <Col md={12}>
        <div className="section-titles-languages">Languages</div>
        <HorizontalLine />
      </Col>

      <Col md={12}>
        <Row className="languagesGroup"></Row>
      </Col>
    </Row>
  );
}

export default DisplayLanguages;