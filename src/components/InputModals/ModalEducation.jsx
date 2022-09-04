import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Context from "../../context/Context";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function ModalEducation(props) {
  const { displayEducation } = useContext(Context);

  const [degree, setDegree] = useState("Bachelor in Computer Science");
  const [university, setUniversity] = useState("Economic University - Varna");
  const [startDate, setStartDate] = useState("2014-05-29");
  const [endDate, setEndDate] = useState("2019-09-29");
  const [city, setCity] = useState("Varna, Bulgaria");
  const [accomplishments, setAccomplishments] = useState([
    {
      message:
        "- Got a GPA of 3.4 in my stay at the university and took additional courses of statistics",
    },
  ]);

  const handleAccomplishments = (index, event) => {
    const values = [...accomplishments];
    values[index][event.target.name] = event.target.value;
    setAccomplishments(values);
  };

  const handleAddField = () => {
    if (accomplishments.length < 3) {
      setAccomplishments([
        ...accomplishments,
        {
          message: "- ",
        },
      ]);
    }
    return;
  };

  const handleRemoveField = (index) => {
    if (accomplishments.length > 1 && accomplishments.length === index + 1) {
      const values = [...accomplishments];
      const paragraph = document.querySelector(`.text` + index);
      paragraph.classList.add("d-none");
      values.splice(index, 1);
      setAccomplishments(values);
    }
    return;
  };

  const ModalEnterPressed = (e) => {
    if (e.key === "Enter") {
      displayEducation(props.onHide, accomplishments);
    }
  };

  return (
    <div onKeyPress={(event) => ModalEnterPressed(event)}>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Education
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col md={12}>
                <Form>
                  <Form.Group className="mb-3">
                    <FloatingLabel label="Degree & Field of Study">
                      <Form.Control
                        type="text"
                        className="educationStudy mb-2"
                        placeholder="Bachelor of Computer Science"
                        value={degree}
                        onChange={(event) => {
                          setDegree(event.target.value);
                        }}
                      />
                    </FloatingLabel>

                    <FloatingLabel label="University Graduated">
                      <Form.Control
                        type="text"
                        className="educationGraduated mb-2"
                        placeholder="Senior Software Engineer"
                        value={university}
                        onChange={(event) => {
                          setUniversity(event.target.value);
                        }}
                      />
                    </FloatingLabel>

                    <Row>
                      <Col md={6}>
                        <FloatingLabel label="Start Date">
                          <Form.Control
                            type="date"
                            className="educationStartDate mb-2"
                            placeholder="02/2022"
                            value={startDate}
                            onChange={(event) => {
                              setStartDate(event.target.value);
                            }}
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel label="End Date">
                          <Form.Control
                            type="date"
                            className="educationEndDate mb-2"
                            placeholder="12/2022"
                            value={endDate}
                            onChange={(event) => {
                              setEndDate(event.target.value);
                            }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={12}>
                        <FloatingLabel label="City, State, Country">
                          <Form.Control
                            type="text"
                            className="educationLocation mb-2"
                            placeholder="Boston"
                            value={city}
                            onChange={(event) => {
                              setCity(event.target.value);
                            }}
                          />
                        </FloatingLabel>
                      </Col>

                      {accomplishments.map((acc, index) => {
                        return (
                          <div key={index}>
                            <Row className="mb-2">
                              <Col md={10}>
                                <FloatingLabel label="Accomplishments">
                                  <Form.Control
                                    type="text"
                                    name="message"
                                    placeholder="accomplishment"
                                    value={acc.message}
                                    onChange={(event) =>
                                      handleAccomplishments(index, event)
                                    }
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
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => displayEducation(props.onHide, accomplishments)}
          >
            Submit
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalEducation;
