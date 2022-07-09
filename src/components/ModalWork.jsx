import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Context from "../context/Context";

function ModalWork(props) {
  const { displayWork } = useContext(Context);

  const [company1, setCompany1] = useState("DXC Technology Inn");
  const [position1, setPosition1] = useState("Front-End Developer");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [workCity, setWorkCity] = useState("");
  const [workState, setWorkState] = useState("");
  const [workCountry, setWorkCountry] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  function persistPosition1(event) {
    setPosition1(event.target.value);
  }
  function persistCompany1(event) {
    setCompany1(event.target.value);
  }
  function persistStartDate(event) {
    setStartDate(event.target.value);
  }
  function persistEndDate(event) {
    setEndDate(event.target.value);
  }
  function persistWorkCity(event) {
    setWorkCity(event.target.value);
  }
  function persistWorkState(event) {
    setWorkState(event.target.value);
  }
  function persistWorkCountry(event) {
    setWorkCountry(event.target.value);
  }
  function persistResponsibilities(event) {
    setResponsibilities(event.target.value);
  }

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Work Experience
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col md={12}>
              <Form>
                <Form.Group className="mb-3">
                  <FloatingLabel label="Company or Organization">
                    <Form.Control
                      type="text"
                      className="workCompany mb-2"
                      placeholder="Microsoft LLC."
                      value={company1}
                      onChange={persistCompany1}
                    />
                  </FloatingLabel>

                  <FloatingLabel label="Job Title">
                    <Form.Control
                      type="text"
                      className="workPosition mb-2"
                      placeholder="Senior Software Engineer"
                      value={position1}
                      onChange={persistPosition1}
                    />
                  </FloatingLabel>
                  <Row>
                    <Col md={6}>
                      <FloatingLabel label="Start Date">
                        <Form.Control
                          type="date"
                          className="workStartDate mb-2"
                          placeholder="02/2022"
                          value={startDate}
                          onChange={persistStartDate}
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md={6}>
                      <FloatingLabel label="End Date">
                        <Form.Control
                          type="date"
                          className="workEndDate mb-2"
                          placeholder="12/2022"
                          value={endDate}
                          onChange={persistEndDate}
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={4}>
                      <FloatingLabel label="City">
                        <Form.Control
                          type="text"
                          className="workLocation mb-2"
                          placeholder="Boston"
                          value={workCity}
                          onChange={persistWorkCity}
                        />
                      </FloatingLabel>
                    </Col>
                    <Col xs={6} md={4}>
                      <FloatingLabel label="State">
                        <Form.Control
                          type="text"
                          className="workLocation mb-2"
                          placeholder="MA"
                          value={workState}
                          onChange={persistWorkState}
                        />
                      </FloatingLabel>
                    </Col>
                    <Col xs={6} md={4}>
                      <FloatingLabel label="Country">
                        <Form.Control
                          type="text"
                          className="workLocation mb-2"
                          placeholder="USA"
                          value={workCountry}
                          onChange={persistWorkCountry}
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <FloatingLabel label="Accomplishments and responsibilities">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      className="workResponsibilities"
                      value={responsibilities}
                      onChange={persistResponsibilities}
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => displayWork(props.onHide)}>Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalWork;
