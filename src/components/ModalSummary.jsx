import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import Context from "../context/Context";

function ModalSummary(props) {
  const { displaySummary } = useContext(Context);

  const [message, setMessage] = useState(
    "Trustworthy, sociable, and willing to go through the hardship of learning any new type of skill set necessary for improved performance and quality standards. Built useful experience in different areas with the main one of them - interest in software engineering. I have been working in the restaurant business as I have obtained my residence in the US, and now ready for a full-scale carrier in programming and computer science. Carrier-switch to Software Engineering officially in 5 months to full-time, currently learning C to understand the lowlevel mechanics of manually creating hash tables, data structures, dynamic memory allocation and freeing, and the infamous pointers."
  );

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col md={12}>
              <Form>
                <Form.Group className="">
                  <Form.Label>Summary</Form.Label>
                  <Form.Control
                    as="textarea"
                    className="modalSummary"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    rows={3}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => displaySummary(props.onHide)}>Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSummary;
