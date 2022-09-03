import React from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";
import { HorizontalLine } from "../../utils/Utils";

function DisplayEducation() {
  return (
    <Row className="educationSection mt-3">
      <Col md={12}>
        <div className="section-titles-education">Education</div>
        <HorizontalLine />
      </Col>

      <Col className="col-auto educationField " id="educationField">
        <Form.Label className="textStudyField"></Form.Label>
      </Col>

      <Row className="edu-university d-none">
        <Col className="col-auto textUniversity" />
        | <Col className="col-auto textEduStartDate gx-0 ms-3" />
        <Col className="col-auto gx-0 mx-1">-</Col>
        <Col className="col-auto textEduEndDate gx-0" />
        <Row className="edu-location-group ">
          <Col className="col-auto textEduLocation" />
        </Row>
      </Row>

      <Col md={12} className="edu-accomplish">
        <div className="textAccomplish"></div>
      </Col>
    </Row>
  );
}

export default DisplayEducation;
