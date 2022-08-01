import React from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/Nav";
import { HorizontalLine } from "../utils/Utils";
import { FiExternalLink } from "react-icons/fi";

function DisplayProjects() {
  return (
    <Row className="projectsField">
      <Col md={12}>
        <div className="section-titles">Personal Projects</div>
        <HorizontalLine />
      </Col>
      <Col md={12} className="d-flex">
        <Form.Label className="projectName"></Form.Label>

        <Nav.Link
          id="projectLink"
          className="projectLink d-none"
          href="https://www.facebook.com/"
        >
          <FiExternalLink className="ms-2 mt-1" />
        </Nav.Link>
      </Col>
      <Col md={12} className="d-flex project-info">
        <div className="me-2 primaryLanguage" />
        <div className="d-none project-period">
          <Col className="d-flex">
            | <div className="ms-2 me-1 projectStartDate" /> -
            <div className="me-2 ms-1 projectEndDate" />
          </Col>
        </div>
      </Col>

      <Col md={12} className="project-accomplish d-flex">
        <div className="projectAccomplishments"></div>
      </Col>
    </Row>
  );
}

export default DisplayProjects;
