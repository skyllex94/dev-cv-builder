import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Context from "../context/Context";
import { GrClose } from "react-icons/gr";

function ModalSkills(props) {
  const { displaySkills } = useContext(Context);

  const [company1, setCompany1] = useState("Nvidia Corp.");
  const [position1, setPosition1] = useState("Front-End Developer");
  const [startDate, setStartDate] = useState("2020-01-29");
  const [endDate, setEndDate] = useState("2020-04-29");
  const [workCity, setWorkCity] = useState("Boston");
  const [workState, setWorkState] = useState("MA");
  const [workCountry, setWorkCountry] = useState("United States");
  const [responsibilities, setResponsibilities] = useState([
    {
      skill: "Javascript",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      skill: "Javascript",
    },
    {
      skill: "React.js",
    },
  ]);

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
    if (responsibilities.length > 1 && responsibilities.length === index + 1) {
      const values = [...responsibilities];
      const paragraph = document.querySelector(`.text` + index + 3);
      paragraph.classList.add("d-none");
      values.splice(index, 1);
      setResponsibilities(values);
    }
    return;
  };

  const insertSkill = (event, index) => {
    const values = [...skills];
    values[index][event.target.name] = event.target.value;
    setSkills(values);
  };

  function addSkill() {
    const values = [...skills, { skill: "" }];
    setSkills(values);
  }

  const removeSkill = (index) => {
    const values = [...skills];
    values.splice(index, 1);
    setSkills(values);
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Skills</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            {skills.map((skill, index) => {
              return (
                <Col className="d-flex mb-2 g-1" md={3} xs={6} key={index}>
                  <Form.Group>
                    <FloatingLabel label="Skill">
                      <Form.Control
                        type="text"
                        name="skill"
                        placeholder="vanilla JS"
                        value={skill.skill}
                        onChange={(event) => insertSkill(event, index)}
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Button variant="white" onClick={() => removeSkill(index)}>
                    <GrClose />
                  </Button>
                </Col>
              );
            })}
            <Button className="mb-2" onClick={addSkill}>
              Add
            </Button>
            <Col md={12}>
              <Form>
                <Form.Group className="mb-3">
                  <FloatingLabel label="Company or Organization">
                    <Form.Control
                      type="text"
                      className="workCompany3 mb-2"
                      placeholder="Microsoft LLC."
                      value={company1}
                      onChange={persistCompany1}
                    />
                  </FloatingLabel>

                  <FloatingLabel label="Job Title">
                    <Form.Control
                      type="text"
                      className="workPosition3 mb-2"
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
                          className="workStartDate3 mb-2"
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
                          className="workEndDate3 mb-2"
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
                          className="workLocation3 mb-2"
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
                          className="workLocation3 mb-2"
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
                          className="workLocation3 mb-2"
                          placeholder="USA"
                          value={workCountry}
                          onChange={persistWorkCountry}
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => displaySkills(props.onHide, skills)}>
          Submit
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSkills;
