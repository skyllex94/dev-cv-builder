import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import Context from "../context/Context";

function ModalInfoContent(props) {
  const { handleName } = useContext(Context);
  const { handleClick } = useContext(Context);

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
                    // onChange={handleName}
                    placeholder="John Doe"
                    className="textName"
                    value="sdfsd"
                    autoFocus
                  />
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="name@gmail.com" />
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
