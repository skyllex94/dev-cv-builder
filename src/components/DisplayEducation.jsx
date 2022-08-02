import React from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";
import { HorizontalLine } from "../utils/Utils";

function DisplayEducation() {
  return (
    <Row className="educationField mt-3">
      <Col md={12}>
        <div className="section-titles">Education</div>
        <HorizontalLine />
      </Col>
      <Col md={12} className="d-flex">
        <Form.Label className="textStudyField"></Form.Label>
      </Col>
      <Col md={12} className="edu-university d-flex">
        <div className="textUniversity me-2" />
        <div className="edu-period d-none">
          <Col className="d-flex">
            | <div className="textEduStartDate ms-2 me-1" /> -
            <div className="textEduEndDate me-2 ms-1" />
            <Col className="edu-location-group d-flex">
              | <div className="textEduLocation ms-2" />
              <div className="textEduLocation me-2" />
              <div className="textEduLocation me-2" />
            </Col>
          </Col>
        </div>
      </Col>

      <Col md={12} className="edu-accomplish">
        <div className="textAccomplish"></div>
      </Col>
    </Row>
  );
}

export default DisplayEducation;
