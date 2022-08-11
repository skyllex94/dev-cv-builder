import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import ModalTemplates from "./ModalTemplates";
import cv from "../img/cv-example.png";

function Landing() {
  const [modalTemplates, setModalTemplates] = useState(false);

  return (
    <Container fluid>
      <Row className="align-items-center mt-5">
        <Col
          md={7}
          className="left_side justify-content-center align-items-center"
        >
          <img src="/logo.png" alt="" />
          <p className="landing_title px-4">Free Developer CV Builder</p>
          <h4 className="landing_text">
            No more wasting time and money. You can start building your software
            developer "Curriculum Vitae" right away and export it for free.{" "}
          </h4>
          <Button
            variant="outline-dark"
            className="px-3 py-2 me-2"
            onClick={() => setModalTemplates(true)}
          >
            Open Modal
          </Button>
          <Link to="/build">
            <Button variant="outline-dark" className="px-3 py-2">
              Create CV
            </Button>
          </Link>
          <Button variant="outline-dark" className="px-3 py-2 ms-2" disabled>
            View Your CV
          </Button>
        </Col>
        <Col
          md={5}
          className="d-flex justify-content-center align-items-center"
        >
          <img className="img-fluid" src={cv} alt="Logo" />
        </Col>
      </Row>
      <ModalTemplates
        show={modalTemplates}
        onHide={() => setModalTemplates(false)}
      />
    </Container>
  );
}

export default Landing;
