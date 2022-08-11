import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { GrClose } from "react-icons/gr";
import template1 from "../img/Template1.png";

function ModalTemplates(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Templates</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col className="d-flex mb-2" md={6} xs={6}>
              <Card className="template-styling text-center">
                <Card.Img variant="top" src={template1} />
                <Card.Body>
                  <Card.Title>Template "Earth"</Card.Title>
                  <Link to="/build" state={{ from: "earth" }}>
                    <Button variant="primary">Choose Template</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex mb-2" md={6} xs={6}>
              <Card className="template-styling text-center">
                <Card.Img variant="top" src={template1} />
                <Card.Body>
                  <Card.Title>Template "Venus"</Card.Title>
                  <Link to="/build" state={{ from: "venus" }}>
                    <Button variant="primary">Choose Template</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default ModalTemplates;
