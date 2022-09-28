import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { GrClose } from "react-icons/gr";

import Context from "../../context/Context";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function ModalProjects(props) {
  const { displayProjects } = useContext(Context);
  const { show, onHide, values, setValues, i } = props;
  const count = i + 1;

  // Add additional value to the selected array of objects
  const addValue = (keyName, valuesIndex) => {
    const updatingValues = [...values];
    if (keyName === "techUsed") {
      updatingValues[valuesIndex][keyName] = [
        ...updatingValues[valuesIndex][keyName],
        {
          message: "",
        },
      ];
    }
    if (keyName === "highlights" && values[valuesIndex][keyName].length < 3) {
      updatingValues[valuesIndex][keyName] = [
        ...updatingValues[valuesIndex][keyName],
        {
          message: "- ",
        },
      ];
    }
    setValues(updatingValues);
  };

  // Remove selected unit from the values and update displaying it
  const removeSelectedValue = (keyName, valuesIndex, secondaryIndex) => {
    if (values[valuesIndex][keyName].length > 1) {
      const updatingValues = [...values];
      updatingValues[valuesIndex][keyName].splice(secondaryIndex, 1);
      setValues(updatingValues);
    }
  };

  // Commit inputted values and pass them to the Context API so they can be passed to the DisplayProjects Component
  const CommitValues = (e) => {
    if (e.key === "Enter" || e === "submit") {
      displayProjects(values);
      updateValuesInLocalStorage();
      onHide();
    }
  };

  // Updating the value to match the inputted value
  function updateValues(event, index) {
    const updatedValues = [...values];
    updatedValues[index][event.target.name] = event.target.value;
    setValues(updatedValues);
  }

  // Updating values in the objects which have an additional arrays of objects
  function updateArrOfValues(event, valuesIndex, secondaryIndex) {
    const updatingValues = [...values];
    updatingValues[valuesIndex][event.target.name][secondaryIndex].message =
      event.target.value;
    setValues(updatingValues);
  }

  // Update the data set to include this current modal's data
  const updateValuesInLocalStorage = () => {
    window.localStorage.setItem("Projects", JSON.stringify(values));
  };

  return (
    <div onKeyPress={(event) => CommitValues(event)}>
      <Modal
        show={show}
        onHide={onHide}
        keyboard={props.keyboard}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Personal Projects {count}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col md={12}>
                <Form>
                  <Form.Group className="mb-3">
                    <FloatingLabel label="Project Name">
                      <Form.Control
                        type="text"
                        name="project"
                        className={"mb-2 modalProjectName" + count}
                        value={values[i].project}
                        onChange={(event) => {
                          updateValues(event, i);
                        }}
                      />
                    </FloatingLabel>
                    <Form.Group>
                      <Row>
                        <Col md={6}>
                          <FloatingLabel label="Link to Website">
                            <Form.Control
                              type="text"
                              name="link"
                              className={"mb-2 modalProjectLink" + count}
                              placeholder="projectWebsite"
                              value={values[i].link}
                              onChange={(event) => {
                                updateValues(event, i);
                              }}
                            />
                          </FloatingLabel>
                        </Col>
                        <Col md={6}>
                          <FloatingLabel label="Github Repo">
                            <Form.Control
                              type="text"
                              name="github"
                              className={"mb-2 modalProjectGithub" + count}
                              placeholder="projectGithub"
                              value={values[i].github}
                              onChange={(event) => {
                                updateValues(event, i);
                              }}
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                    </Form.Group>

                    <FloatingLabel label="Project Description *">
                      <Form.Control
                        type="text"
                        name="desc"
                        className={"mb-2 modalDesc" + count}
                        placeholder="desc"
                        value={values[i].desc}
                        onChange={(event) => {
                          updateValues(event, i);
                        }}
                      />
                    </FloatingLabel>
                    <Row>
                      {values[i].techUsed.map((tech, index) => {
                        return (
                          <Col
                            className="d-flex mb-2"
                            md={3}
                            xs={6}
                            key={index}
                          >
                            <Form.Group>
                              <FloatingLabel label="Technology:">
                                <Form.Control
                                  type="text"
                                  name="techUsed"
                                  className={"mb-2 modalTech" + count}
                                  placeholder="tech"
                                  value={tech.message}
                                  onChange={(event) =>
                                    updateArrOfValues(event, i, index)
                                  }
                                />
                              </FloatingLabel>
                            </Form.Group>
                            <Button
                              variant="white"
                              onClick={() =>
                                removeSelectedValue("techUsed", i, index)
                              }
                            >
                              <GrClose />
                            </Button>
                          </Col>
                        );
                      })}
                    </Row>

                    <Col className="d-flex justify-content-end">
                      <Button
                        className="mb-2"
                        onClick={() => addValue("techUsed", i)}
                      >
                        Add
                      </Button>
                    </Col>

                    <Row>
                      <Col md={6}>
                        <FloatingLabel label="Start Date">
                          <Form.Control
                            type="date"
                            name="startDate"
                            className={"mb-2 modalProjectStartDate" + count}
                            placeholder="02/2022"
                            value={values[i].startDate}
                            onChange={(event) => {
                              updateValues(event, i);
                            }}
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel label="End Date">
                          <Form.Control
                            type="date"
                            name="endDate"
                            className={"mb-2 modalProjectEndDate" + count}
                            placeholder="12/2022"
                            value={values[i].endDate}
                            onChange={(event) => {
                              updateValues(event, i);
                            }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row>
                      {values[i].highlights.map((highlight, index) => {
                        return (
                          <div key={index}>
                            <Row className="mb-2">
                              <Col md={10}>
                                <FloatingLabel label="Highlights">
                                  <Form.Control
                                    type="text"
                                    name="highlights"
                                    placeholder="highlights"
                                    value={highlight.message}
                                    onChange={(event) =>
                                      updateArrOfValues(event, i, index)
                                    }
                                  />
                                </FloatingLabel>
                              </Col>
                              <Col md={2} className="mt-2">
                                <Button
                                  variant="white"
                                  onClick={() => addValue("highlights", i)}
                                >
                                  <AiOutlinePlus />
                                </Button>
                                <Button
                                  variant="white"
                                  onClick={() =>
                                    removeSelectedValue("highlights", i, index)
                                  }
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
          <Button onClick={() => CommitValues("submit")}>Submit</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ModalProjects;
