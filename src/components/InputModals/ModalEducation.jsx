import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Context from "../../context/Context";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { updateValuesInLocalStorage } from "../ContPanelSections/ContPanelFunctions";

function ModalEducation(props) {
  const { displayEducation } = useContext(Context);
  const { show, onHide, values, setValues, i } = props;

  const updateArrInput = (valuesIndex, secondaryIndex, event) => {
    const updateValues = [...values];
    updateValues[valuesIndex].accomplishments[secondaryIndex].message =
      event.target.value;
    setValues(updateValues);
  };

  const addAccomplishment = (valuesIndex) => {
    const updatingValues = [...values];
    if (values[valuesIndex].accomplishments.length < 5) {
      updatingValues[valuesIndex].accomplishments = [
        ...updatingValues[valuesIndex].accomplishments,
        {
          message: "- ",
        },
      ];
    }
    setValues(updatingValues);
  };

  const removeAccomplishment = (valuesIndex, secondaryIndex) => {
    if (values[valuesIndex].accomplishments.length > 1) {
      const updatingValues = [...values];
      updatingValues[valuesIndex].accomplishments.splice(secondaryIndex, 1);
      setValues(updatingValues);
    }
  };

  const CommitValues = (e) => {
    if (e.key === "Enter" || e === "submit") {
      displayEducation(values);
      updateValuesInLocalStorage(values, "Education");
      onHide();
    }
  };

  function updateValues(targetValue, keyName, index) {
    const updatedValues = [...values];
    updatedValues[index][keyName] = targetValue;
    setValues(updatedValues);
  }

  const updateCurrentEducation = (index) => {
    const currValues = [...values];
    currValues[index].ongoing = !currValues[index].ongoing;
    setValues(currValues);
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
            Education {i + 1}
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
                        value={values[i].degree}
                        onChange={(event) => {
                          updateValues(event.target.value, "degree", i);
                        }}
                      />
                    </FloatingLabel>

                    <FloatingLabel label="University Graduated">
                      <Form.Control
                        type="text"
                        className="educationGraduated mb-2"
                        placeholder="Senior Software Engineer"
                        value={values[i].university}
                        onChange={(event) => {
                          updateValues(event.target.value, "university", i);
                        }}
                      />
                    </FloatingLabel>

                    <div className="ms-2 my-3">
                      <input
                        type="checkbox"
                        checked={values[i].ongoing}
                        label="I'm currently working on this position"
                        onChange={() => updateCurrentEducation(i)}
                      />
                      <label className="ms-2">Currently in progress</label>
                    </div>

                    <Row>
                      <Col md={6}>
                        <FloatingLabel label="Start Date">
                          <Form.Control
                            type="date"
                            className="educationStartDate mb-2"
                            placeholder="02/2022"
                            value={values[i].startDate}
                            onChange={(event) => {
                              updateValues(event.target.value, "startDate", i);
                            }}
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel label="End Date">
                          <Form.Control
                            type={values[i].ongoing ? "text" : "date"}
                            className="educationEndDate mb-2"
                            disabled={values[i].ongoing}
                            placeholder="12/2022"
                            value={
                              values[i].ongoing ? "Present" : values[i].endDate
                            }
                            onChange={
                              !values[i].ongoing
                                ? (event) => {
                                    updateValues(
                                      event.target.value,
                                      "endDate",
                                      i
                                    );
                                  }
                                : undefined
                            }
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
                            value={values[i].location}
                            onChange={(event) => {
                              updateValues(event.target.value, "location", i);
                            }}
                          />
                        </FloatingLabel>
                      </Col>

                      {values[i].accomplishments.map((acc, index) => {
                        return (
                          <div key={index}>
                            <Row className="mb-2">
                              <Col md={10}>
                                <FloatingLabel label="Accomplishments">
                                  <Form.Control
                                    type="text"
                                    placeholder="accomplishment"
                                    value={acc.message}
                                    onChange={(event) =>
                                      updateArrInput(i, index, event)
                                    }
                                  />
                                </FloatingLabel>
                              </Col>
                              <Col md={2} className="mt-2">
                                <Button
                                  variant="white"
                                  onClick={() => addAccomplishment(i)}
                                >
                                  <AiOutlinePlus />
                                </Button>
                                <Button
                                  variant="white"
                                  onClick={() => removeAccomplishment(i, index)}
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

export default ModalEducation;
