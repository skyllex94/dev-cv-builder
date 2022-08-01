import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { GrClose } from "react-icons/gr";

import Context from "../context/Context";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function ModalProjects(props) {
  const { displayProjects } = useContext(Context);

  const [project, setProject] = useState("Dev-CV-Builder");
  const [projectLink, setProjectLink] = useState(
    "https://dev-cv-builder.herokuapp.com"
  );
  const [projectGithub, setProjectGithub] = useState(
    "https://github.com/skyllex94/dev-cv-builder"
  );
  const [desc, setDesc] = useState("A React.js based Free CV builder.");
  const [techUsed, setTechUsed] = useState([
    {
      tech: "Javascript",
    },
    {
      tech: "React.js",
    },
  ]);
  const [startDate, setStartDate] = useState("2019-05-29");
  const [endDate, setEndDate] = useState("2019-09-29");
  const [highlights, setHighlights] = useState([
    {
      message: "- Improved skillset by 200% with this last project I did.",
    },
  ]);

  const modalValues = [
    ".modalProjectName",
    ".modalDesc",
    ".modalProjectStartDate",
    ".modalProjectEndDate",
  ];

  const jobAmount = props.jobCount + 1;

  const handleHighlight = (index, event) => {
    const values = [...highlights];
    values[index][event.target.name] = event.target.value;
    setHighlights(values);
  };

  const handleAddField = () => {
    if (highlights.length < 3) {
      setHighlights([
        ...highlights,
        {
          message: "- ",
        },
      ]);
    }
    return;
  };

  const handleRemoveField = (index) => {
    if (highlights.length > 1 && highlights.length === index + 1) {
      const values = [...highlights];
      values.splice(index, 1);
      setHighlights(values);
    }
    return;
  };

  const insertTech = (event, index) => {
    const values = [...techUsed];
    values[index][event.target.name] = event.target.value;
    setTechUsed(values);
  };

  const removeTech = (index) => {
    const values = [...techUsed];
    values.splice(index, 1);
    setTechUsed(values);
  };

  const addTech = () => {
    const values = [...techUsed, { tech: "" }];
    setTechUsed(values);
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
          Personal Projects
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col md={12}>
              <Form>
                <Form.Group className="mb-3">
                  <FloatingLabel label="Project Name *">
                    <Form.Control
                      type="text"
                      className={"mb-2 modalProjectName"}
                      value={project}
                      onChange={(event) => {
                        setProject(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <Form.Group>
                    <Row>
                      <Col md={6}>
                        <FloatingLabel label="Link to Website">
                          <Form.Control
                            type="text"
                            className={"mb-2 modalProjectLink"}
                            placeholder="projectWebsite"
                            value={projectLink}
                            onChange={(event) => {
                              setProjectLink(event.target.value);
                            }}
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel label="Github Repo">
                          <Form.Control
                            type="text"
                            className={"mb-2 modalProjectGithub"}
                            placeholder="projectGithub"
                            value={projectGithub}
                            onChange={(event) => {
                              setProjectGithub(event.target.value);
                            }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </Form.Group>

                  <FloatingLabel label="Project Description *">
                    <Form.Control
                      type="text"
                      className={"mb-2 modalDesc"}
                      placeholder="desc"
                      value={desc}
                      onChange={(event) => {
                        setDesc(event.target.value);
                      }}
                    />
                  </FloatingLabel>
                  <Form.Group>
                    <Row>
                      {techUsed.map((tech, index) => {
                        return (
                          <Col
                            className="d-flex mb-2"
                            md={3}
                            xs={6}
                            key={index}
                          >
                            <FloatingLabel label="Technology:">
                              <Form.Control
                                type="text"
                                className={"mb-2 modalTech"}
                                placeholder="tech"
                                name="tech"
                                value={tech.tech}
                                onChange={(event) => insertTech(event, index)}
                              />
                            </FloatingLabel>
                            <Button
                              variant="white"
                              onClick={() => removeTech(index)}
                            >
                              <GrClose />
                            </Button>
                          </Col>
                        );
                      })}
                      <Button onClick={addTech}>Add</Button>
                    </Row>
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <FloatingLabel label="Start Date">
                        <Form.Control
                          type="date"
                          className={"mb-2 modalProjectStartDate"}
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
                          className={"mb-2 modalProjectEndDate"}
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
                    {highlights.map((highlight, index) => {
                      return (
                        <div key={index}>
                          <Row className="mb-2">
                            <Col md={10}>
                              <FloatingLabel label="Highlights">
                                <Form.Control
                                  type="text"
                                  name="message"
                                  placeholder="highlights"
                                  value={highlight.message}
                                  onChange={(event) =>
                                    handleHighlight(index, event)
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
          onClick={() =>
            displayProjects(
              props.onHide,
              props.uiclasses,
              modalValues,
              highlights
            )
          }
        >
          Submit
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalProjects;
