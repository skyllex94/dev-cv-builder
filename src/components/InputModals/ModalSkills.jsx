import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Context from "../../context/Context";
import { GrClose } from "react-icons/gr";

function ModalSkills(props) {
  const { displayInlineText } = useContext(Context);

  const [skills, setSkills] = useState([
    {
      skill: "Javascript",
    },
    {
      skill: "React.js",
    },
    {
      skill: "Bootstrap 5",
    },
    {
      skill: "Git",
    },
    {
      skill: "HTML5/CSS3",
    },
    {
      skill: "Heroku",
    },
    {
      skill: "SASS",
    },
    {
      skill: "SQLite",
    },
    {
      skill: "Python",
    },
    {
      skill: "Flask",
    },
  ]);

  const updateSkill = (event, index) => {
    const values = [...skills];
    values[index][event.target.name] = event.target.value;
    setSkills(values);
  };

  function addSkill() {
    const values = [...skills, { skill: "" }];
    setSkills(values);
  }

  const removeSkill = (index) => {
    if (skills.length > 1) {
      const values = [...skills];
      values.splice(index, 1);
      setSkills(values);
    }
  };

  const CommitValues = (e) => {
    if (e.key === "Enter" || e === "submit") {
      displayInlineText(skills, "skillsGroup");
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
