import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { GrClose } from "react-icons/gr";

function TemplatesModal(props) {
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
            <Col className="d-flex mb-2 g-1" md={3} xs={6}>
              <Form.Group>
                <FloatingLabel label="Language">
                  <Form.Control
                    type="text"
                    name="language"
                    placeholder="English"
                    value="sdf"
                    // onChange={(event) => insertLanguages(event, index)}
                  />
                </FloatingLabel>
              </Form.Group>
              <Button variant="white">
                <GrClose />
              </Button>
            </Col>
            <Button className="mb-2">Add</Button>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button>Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TemplatesModal;
