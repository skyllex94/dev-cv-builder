import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Context from "../context/Context";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function ModalWork2(props) {
  const { displayWork2 } = useContext(Context);

  const [company2, setCompany2] = useState("DXC Technology");
  const [position1, setPosition1] = useState("Front-End Developer");
  const [startDate, setStartDate] = useState("2019-05-29");
  const [endDate, setEndDate] = useState("2019-09-29");
  const [workCity, setWorkCity] = useState("Boston");
  const [workState, setWorkState] = useState("MA");
  const [workCountry, setWorkCountry] = useState("United States");
  const [responsibilities, setResponsibilities] = useState([
    {
      message:
        "- I was responsible to taking care of the software archithecture and rectruting people that can manage it better for me.",
    },
  ]);

  function persistPosition1(event) {
    setPosition1(event.target.value);
  }
  function persistCompany2(event) {
    setCompany2(event.target.value);
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

  const handleResp = (index, event) => {
    const values = [...responsibilities];
    values[index][event.target.name] = event.target.value;
    setResponsibilities(values);
  };

  const handleAddField = () => {
    if (responsibilities.length < 3) {
      setResponsibilities([
        ...responsibilities,
        {
          message: "- ",
        },
      ]);
    }
    return;
  };

  const handleRemoveField = (index) => {
    if (responsibilities.length > 1) {
      const values = [...responsibilities];
      const paragraph = document.querySelector(`.text` + index);
      paragraph.classList.add("d-none");
      values.splice(index, 1);
      setResponsibilities(values);
    }
    return;
  };

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
                      className="workCompany2 mb-2"
                      placeholder="Microsoft LLC."
                      value={company2}
                      onChange={persistCompany2}
                    />
                  </FloatingLabel>

                  <FloatingLabel label="Job Title">
                    <Form.Control
                      type="text"
                      className="workPosition2 mb-2"
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
                          className="workStartDate2 mb-2"
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
                          className="workEndDate2 mb-2"
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
                          className="workLocation2 mb-2"
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
                          className="workLocation2 mb-2"
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
                          className="workLocation2 mb-2"
                          placeholder="USA"
                          value={workCountry}
                          onChange={persistWorkCountry}
                        />
                      </FloatingLabel>
                    </Col>
                    {responsibilities.map((resp, index) => {
                      return (
                        <div key={index}>
                          <Row className="mb-2">
                            <Col md={10}>
                              <FloatingLabel label="Accomplishments and Responsibilities">
                                <Form.Control
                                  type="text"
                                  name="message"
                                  placeholder="Resp"
                                  value={resp.message}
                                  onChange={(event) => handleResp(index, event)}
                                />
                              </FloatingLabel>
                            </Col>
                            <Col md={2} className="mt-2">
                              <Button
                                variant="white"
                                onClick={() => handleAddField()}
                              >
                                <AiOutlinePlus />
                              </Button>
                              <Button
                                variant="white"
                                onClick={() => handleRemoveField(index)}
                              >
                                <AiOutlineMinus />
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      );
                    })}
                  </Row>
                  {/*<CKEditor
                    editor={ClassicEditor}
                    data={responsibilities}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setResponsibilities(data);
                    }}
                  />
                  <Parser resp={responsibilities} />*/}
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => displayWork2(props.onHide, responsibilities)}>
          Submit
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalWork2;
