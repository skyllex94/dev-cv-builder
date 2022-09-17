import React, { useState, useContext, useEffect } from "react";
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

  // useEffect(() => {
  //   values.forEach((curr, index) => {
  //     if (props.jobcount < values.length) {
  //       setValues([
  //         ...values,
  //         {
  //           company: values[index].company,
  //           position: values[index].position,
  //           startDate: values[index].startDate,
  //           endDate: values[index].endDate,
  //           location: values[index].location,
  //           resp: values[index].resp,
  //         },
  //       ]);
  //     }
  //   });
  // }, [props.jobcount]);

  // const allValues = { company, position, startDate, endDate, location, resp };

  // // Fetch stored data and populate it in values of the input fields
  // useEffect(() => {
  //   const data = JSON.parse(window.localStorage.getItem("Work"));

  //   if (data != null) {
  //     setCompany(data.company);
  //     setPosition(data.position);
  //     setStartDate(data.startDate);
  //     setEndDate(data.endDate);
  //     setLocation(data.location);
  //     setResp(data.resp);
  //   }
  // }, []);

  // Destructure values, and setValues to use it the modal for each added job
  // setvalues is lower-case since triggering prop warning
  const { values, setvalues, i } = props;
  const jobCount = props.i + 1;

  // Add additional responsibility for the given job
  const addResp = (values, index) => {
    console.log(values[index].resp);
    if (values[index].resp.length < 3) {
      const currValues = [...values];
      currValues[index].resp = [
        ...currValues[index].resp,
        {
          message: "- ",
        },
      ];
      setvalues(currValues);
    }
  };

  // Remove current responsibility from the array
  const removeResp = (values, index) => {
    if (
      values[index].resp.length > 1 &&
      values[index].resp.length === index + 1
    ) {
      const currValues = [...values];
      currValues[index].resp.splice(index, 1);
      setvalues(currValues);
    }
  };

  // Commit all values and send them to the Context API to display and store the data
  const CommitValues = (e) => {
    if (e.key === "Enter" || e === "submit") {
      displayWork(props.onHide, jobCount, props.modals, values);
      updateValuesInLocalStorage();
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
    setvalues(currValues);
  };

  // Update the responsibilities for the specific job and the specific amount
  const updateResp = (event, count, index) => {
    const currValues = [...values];
    currValues[count].resp[index].message = event.target.value;
    setvalues(currValues);
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
          <Modal.Title id="contained-modal-title-vcenter">
            Work Experience {jobCount}
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
                        className={"mb-2 workCompany" + jobCount}
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
                        className={"mb-2 workPosition" + jobCount}
                        placeholder="Senior Software Engineer"
                        value={values[i].position}
                        onChange={(event) => {
                          updateValues(event, i);
                        }}
                      />
                    </FloatingLabel>
                    <Row>
                      <Col md={6}>
                        <FloatingLabel label="Start Date">
                          <Form.Control
                            type="date"
                            name="startDate"
                            className={"mb-2 workStartDate" + jobCount}
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
                            className={"mb-2 workEndDate" + jobCount}
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
                      <Col md={12}>
                        <FloatingLabel label="City, State, Country">
                          <Form.Control
                            type="text"
                            name="location"
                            className={"mb-2 workLocation" + jobCount}
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
                                  onClick={() => addResp(values, i)}
                                >
                                  <AiOutlinePlus />
                                </Button>
                                <Button
                                  variant="white"
                                  onClick={() => removeResp(values, index)}
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

export default ModalWork;
