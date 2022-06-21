import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import { BiMailSend } from "react-icons/bi";

import Context from "../context/Context";

function ModalInfoContent(props) {
  const { handleClick } = useContext(Context);

  // const defaultNameValue = document.querySelector(".previewName");

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          General Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="John Doe"
                    className="modalName mb-2"
                    autoFocus
                    defaultValue="Kamen Kanchev"
                  />
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Front-end Developer"
                    className="modalPosition mb-2"
                    defaultValue="Frontend Developer"
                  />
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    className="modalAddress mb-2"
                    defaultValue="Boston"
                  />
                  <Row>
                    <Col className="col-6">
                      <Form.Control
                        type="text"
                        placeholder="State"
                        className="modalAddress mb-2"
                        defaultValue="MA"
                      />
                    </Col>
                    <Col className="col-6">
                      <Form.Control
                        type="text"
                        placeholder="ZIP Code"
                        className="modalAddress mb-2"
                        defaultValue="02657"
                      />
                    </Col>
                  </Row>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@email.com"
                    className="modalEmail mb-2"
                    defaultValue="kkanchev94@gmail.com"
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col xs={6} md={4}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Position</Form.Label>
                  <Form.Control type="text" placeholder="Front-end Developer" />
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Boston, MA" />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick}>Commit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalInfoContent;