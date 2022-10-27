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

function ModalWork(props) {
  const { displayWork } = useContext(Context);

  // Destructure values, and setValues to use it the modal for each added job
  const { show, onHide, values, setValues, i } = props;

  // Add additional responsibility for the given job
  const addResp = (index) => {
    if (values[index].resp.length < 3) {
      const currValues = [...values];
      currValues[index].resp = [
        ...currValues[index].resp,
        {
          message: "- ",
        },
      ];
      setValues(currValues);
    }
  };

  // Remove current responsibility from the array
  const removeResp = (valuesIndex, index) => {
    if (values[valuesIndex].resp.length > 1) {
      const currValues = [...values];
      currValues[valuesIndex].resp.splice(index, 1);
      setValues(currValues);
    }
  };

  // Commit all values and send them to the Context API to display and store the data
  const CommitValues = (e) => {
    if (e.key === "Enter" || e === "submit") {
      displayWork(values);
      updateValuesInLocalStorage();
      onHide();
    }
  };

  // Update the data set to include this current modal's data
  const updateValuesInLocalStorage = () => {
    window.localStorage.setItem("Work", JSON.stringify(values));
  };

  // Update the change in the current textfield and update the "values" array of objects
  const updateValues = (event, index) => {
    const currValues = [...values];
    currValues[index][event.target.name] = event.target.value;
    setValues(currValues);
  };

  // Update the responsibilities for the specific job and the specific amount
  const updateResp = (event, count, index) => {
    const currValues = [...values];
    currValues[count].resp[index].message = event.target.value;
    setValues(currValues);
  };

  const updateCurrentlyWorking = (index) => {
    const currValues = [...values];
    currValues[index].currentJob = !currValues[index].currentJob;
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
            Work Experience {i + 1}
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
                        name="company"
                        className={"mb-2"}
                        placeholder="Microsoft LLC."
                        value={values[i].company}
                        onChange={(event) => {
                          updateValues(event, i);
                        }}
                      />
                    </FloatingLabel>

                    <FloatingLabel label="Job Title">
                      <Form.Control
                        type="text"
                        name="position"
                        className={"mb-2"}
                        placeholder="Senior Software Engineer"
                        value={values[i].position}
                        onChange={(event) => {
                          updateValues(event, i);
                        }}
                      />
                    </FloatingLabel>

                    <div className="ms-2 my-3">
                      <input
                        type="checkbox"
                        checked={values[i].currentJob}
                        label="I'm currently working on this position"
                        onChange={() => updateCurrentlyWorking(i)}
                      />
                      <label className="ms-2">
                        I'm currently working this job
                      </label>
                    </div>

                    <Row>
                      <Col md={6}>
                        <FloatingLabel label="Start Date">
                          <Form.Control
                            type="date"
                            name="startDate"
                            className={"mb-2"}
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
                            type={values[i].currentJob ? "text" : "date"}
                            name={
                              values[i].currentJob ? "currentJob" : "endDate"
                            }
                            disabled={values[i].currentJob}
                            className={"mb-2"}
                            placeholder="12/2022"
                            value={
                              values[i].currentJob
                                ? "Present"
                                : values[i].endDate
                            }
                            onChange={(event) => {
                              updateValues(event, i);
                            }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <FloatingLabel label="City, State, Country">
                          <Form.Control
                            type="text"
                            name="location"
                            className={"mb-2"}
                            placeholder="Boston"
                            value={values[i].location}
                            onChange={(event) => {
                              updateValues(event, i);
                            }}
                          />
                        </FloatingLabel>
                      </Col>
                      {values[i].resp.map((curr, index) => {
                        return (
                          <div key={index}>
                            <Row className="mb-2">
                              <Col md={10}>
                                <FloatingLabel label="Accomplishments and resp">
                                  <Form.Control
                                    type="text"
                                    name="message"
                                    placeholder="Resp"
                                    value={curr.message}
                                    onChange={(event) => {
                                      updateResp(event, i, index);
                                    }}
                                  />
                                </FloatingLabel>
                              </Col>
                              <Col md={2} className="mt-2">
                                <Button
                                  variant="white"
                                  onClick={() => addResp(i)}
                                >
                                  <AiOutlinePlus />
                                </Button>
                                <Button
                                  variant="white"
                                  onClick={() => removeResp(i, index)}
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
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalWork;
