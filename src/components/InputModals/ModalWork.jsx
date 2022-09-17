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

  const [company, setCompany] = useState("DXC Technology Inn");
  const [position, setPosition] = useState("Front-End Developer");
  const [startDate, setStartDate] = useState("2019-05-29");
  const [endDate, setEndDate] = useState("2019-09-29");
  const [location, setLocation] = useState("Boston, MA, USA");
  const [resp, setResp] = useState([
    {
      message:
        "- I was responsible to taking care of the software archithecture and rectruting people that can manage it better for me.",
    },
  ]);

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

  const jobAmount = props.jobcount + 1;
  const count = props.jobcount;
  let i = props.i;

  const addResp = (values) => {
    if (values[0].resp.length < 3) {
      const currValues = [...values];
      currValues[0].resp = [
        ...currValues[0].resp,
        {
          message: "- ",
        },
      ];
      props.setValues(currValues);
    }
  };

  const removeResp = (values, index) => {
    if (values[0].resp.length > 1 && values[0].resp.length === index + 1) {
      const currValues = [...values];
      currValues[0].resp.splice(index, 1);
      props.setValues(currValues);
    }
  };

  const CommitValues = (e) => {
    if (e.key === "Enter" || e === "submit") {
      displayWork(props.onHide, jobAmount, props.modals, props.values);
      updateValuesInLocalStorage();
    }
  };

  const updateValuesInLocalStorage = () => {
    // window.localStorage.setItem(
    //   "Work",
    //   JSON.stringify({
    //     values,
    //   })
    // );
  };

  const updateValues = (event, index) => {
    const currValues = [...props.values];
    currValues[0][event.target.name] = event.target.value;
    props.setValues(currValues);
  };

  const updateResp = (event, count, index) => {
    const currValues = [...props.values];
    currValues[0].resp[index].message = event.target.value;
    props.setValues(currValues);
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
            Work Experience {jobAmount}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col md={12}>
                <Form>
                  <Form.Group className="mb-3">
                    <FloatingLabel label="Company or Organization">
                      {props.values[i].company}
                      <Form.Control
                        type="text"
                        name="company"
                        className={"mb-2 workCompany" + jobAmount}
                        placeholder="Microsoft LLC."
                        value={props.values[i].company}
                        onChange={(event) => {
                          updateValues(event, count);
                        }}
                      />
                    </FloatingLabel>

                    <FloatingLabel label="Job Title">
                      <Form.Control
                        type="text"
                        name="position"
                        className={"mb-2 workPosition" + jobAmount}
                        placeholder="Senior Software Engineer"
                        value={props.values[i].position}
                        onChange={(event) => {
                          updateValues(event, count);
                        }}
                      />
                    </FloatingLabel>
                    <Row>
                      <Col md={6}>
                        <FloatingLabel label="Start Date">
                          <Form.Control
                            type="date"
                            name="startDate"
                            className={"mb-2 workStartDate" + jobAmount}
                            placeholder="02/2022"
                            value={props.values[i].startDate}
                            onChange={(event) => {
                              updateValues(event, count);
                            }}
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel label="End Date">
                          <Form.Control
                            type="date"
                            name="endDate"
                            className={"mb-2 workEndDate" + jobAmount}
                            placeholder="12/2022"
                            value={props.values[i].endDate}
                            onChange={(event) => {
                              updateValues(event, count);
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
                            className={"mb-2 workLocation" + jobAmount}
                            placeholder="Boston"
                            value={props.values[i].location}
                            onChange={(event) => {
                              updateValues(event, count);
                            }}
                          />
                        </FloatingLabel>
                      </Col>
                      {props.values[i].resp.map((curr, index) => {
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
                                      updateResp(event, count, index);
                                    }}
                                  />
                                </FloatingLabel>
                              </Col>
                              <Col md={2} className="mt-2">
                                <Button
                                  variant="white"
                                  onClick={() => addResp([props.values])}
                                >
                                  <AiOutlinePlus />
                                </Button>
                                <Button
                                  variant="white"
                                  onClick={() =>
                                    removeResp([props.values], index)
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

export default ModalWork;
