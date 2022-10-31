import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { updateValuesInLocalStorage } from "../ContPanelSections/ContPanelFunctions";

import Context from "../../context/Context";
import { GrClose } from "react-icons/gr";

function ModalSkills(props) {
  const { displayInlineText } = useContext(Context);
  const data = JSON.parse(window.localStorage.getItem("Skills"));

  // Value starter to initialize some begining skills
  const valueInstance = [
    {
      skill: "",
    },
    // {
    //   skill: "React.js",
    // },
    // {
    //   skill: "Bootstrap 5",
    // },
    // {
    //   skill: "Git",
    // },
    // {
    //   skill: "HTML5/CSS3",
    // },
    // {
    //   skill: "Heroku",
    // },
    // {
    //   skill: "SASS",
    // },
    // {
    //   skill: "SQLite",
    // },
    // {
    //   skill: "Python",
    // },
    // {
    //   skill: "Flask",
    // },
  ];

  const [skills, setSkills] = useState(retrieveData);

  // Retrieve data either from localStorage, or taking a value starter
  function retrieveData() {
    if (data !== null) {
      return data;
    } else {
      return valueInstance;
    }
  }

  // Check if there's anything it localStorage and pass the data to be display on window loaded
  useEffect(() => {
    if (data !== null) {
      displayInlineText(data);
    }
  }, []);

  const updateSkill = (event, index) => {
    const values = [...skills];
    values[index][event.target.name] = event.target.value;
    updateValues(values);
  };

  function addSkill() {
    const values = [...skills, { skill: "" }];
    updateValues(values);
  }

  const removeSkill = (index) => {
    if (skills.length > 1) {
      const values = [...skills];
      values.splice(index, 1);
      updateValues(values);
    }
  };

  // Update values in the state and in the localStorage
  function updateValues(newValueSet) {
    setSkills(newValueSet);
    updateValuesInLocalStorage(newValueSet, "Skills");
  }

  // On Submit being clicked, pass data to ContextAPI and update it in localStorage
  const CommitValues = (e) => {
    if (e.key === "Enter" || e === "submit") {
      displayInlineText(skills);
      updateValuesInLocalStorage(skills, "Skills");
      props.onHide();
    }
  };

  return (
    <div onKeyPress={(event) => CommitValues(event)}>
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
                          autoFocus
                          placeholder="vanilla JS"
                          value={skill.skill}
                          onChange={(event) => updateSkill(event, index)}
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Button variant="white" onClick={() => removeSkill(index)}>
                      <GrClose />
                    </Button>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button onClick={addSkill}>Add Skill</Button>
          <div>
            <Button className="me-2" onClick={() => CommitValues("submit")}>
              Submit
            </Button>
            <Button onClick={props.onHide}>Close</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalSkills;
