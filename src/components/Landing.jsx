import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import ModalTemplates from "./InputModals/ModalTemplates";
import cv from "../img/cv-landing.png";

function Landing() {
  const [modalTemplates, setModalTemplates] = useState(false);
  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/signin");
  };

  return (
    <Container fluid>
      <Row className="align-items-center mt-5">
        <Col
          md={7}
          className="left_side justify-content-center align-items-center"
        >
          <img src="/logo.png" alt="" />
          <p className="landing_title px-4">Free Developer CV Builder</p>
          <h4 className="landing_text mb-4">
            No more wasting time and money. You can start building your software
            developer "Curriculum Vitae" right away and export it for free.{" "}
          </h4>
          <Link to="/build" state={{ template: "earth" }}>
            <Button variant="outline-dark" className="px-3 py-2 me-2">
              Start Your Resume
            </Button>
          </Link>

          <Button
            variant="outline-dark"
            className="px-3 py-2 ms-2"
            onClick={navigateToSignIn}
          >
            Create an Account
          </Button>
          <p className="mt-3">
            *No need for creating an account to save and export your resume
          </p>
        </Col>

        <Col
          md={5}
          className="d-flex justify-content-center px-5 align-items-center"
        >
          <img className="img-fluid landing-image mx-5 " src={cv} alt="Logo" />
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
