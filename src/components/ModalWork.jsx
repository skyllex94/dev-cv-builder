import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Context from "../context/Context";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";

function ModalWork(props) {
  const { displayWork } = useContext(Context);

  const [company1, setCompany1] = useState("DXC Technology Inn");
  const [position1, setPosition1] = useState("Front-End Developer");
  const [startDate, setStartDate] = useState("2019-05-29");
  const [endDate, setEndDate] = useState("2019-09-29");
  const [workCity, setWorkCity] = useState("Boston");
  const [workState, setWorkState] = useState("MA");
  const [workCountry, setWorkCountry] = useState("United States");
  const [responsibilities, setResponsibilities] = useState(
    "- I was responsible to taking care of the software archithecture and rectruting people that can manage it better for me.This is my statement one. &#13; &#10; This is my statement2"
  );

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

                  <CKEditor
                    editor={ClassicEditor}
                    data={responsibilities}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setResponsibilities(data);
                    }}
                  />
                  <Parser resp={responsibilities} />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => displayWork(props.onHide, responsibilities)}>
          Submit
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Parser = ({ resp }) => {
  return parse(resp);
};

export default ModalWork;
