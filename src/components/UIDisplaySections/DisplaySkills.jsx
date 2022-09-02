import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { HorizontalLine } from "../../utils/Utils";

function DisplaySkills() {
  return (
    <Row className="skillsField mt-3">
      <Col md={12}>
        <div className="section-titles-skills">Skills</div>
        <HorizontalLine />
      </Col>

      <Col md={12}>
        <Row className="skillsGroup"></Row>
      </Col>
    </Row>
  );
}

export default DisplaySkills;