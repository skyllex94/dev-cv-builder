import React, { useState, useContext, useEffect, createContext } from "react";
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

  const allValues = { company, position, startDate, endDate, location, resp };

  // Fetch stored data and populate it in values of the input fields
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("Work"));

    if (data != null) {
      setCompany(data.company);
      setPosition(data.position);
      setStartDate(data.startDate);
      setEndDate(data.endDate);
      setLocation(data.location);
      setResp(data.resp);
    }
  }, []);

  const jobAmount = props.jobcount + 1;

  const handleResp = (index, event) => {
    const values = [...resp];
    values[index][event.target.name] = event.target.value;
    setResp(values);
  };

  const handleAddField = () => {
    if (resp.length < 3) {
      setResp([
        ...resp,
        {
          message: "- ",
        },
      ]);
    }
    return;
  };

  const handleRemoveField = (index) => {
    if (resp.length > 1 && resp.length === index + 1) {
      const values = [...resp];
      values.splice(index, 1);
      setResp(values);
    }
  };

  const CommitValues = (e) => {
    if (e.key === "Enter" || e === "submit") {
      displayWork(props.onHide, jobAmount, props.modals, allValues);
      updateValuesInLocalStorage();
    }
  };

  const updateValuesInLocalStorage = () => {
    window.localStorage.setItem(
      "Work",
      JSON.stringify({
        company,
        position,
        startDate,
        endDate,
        location,
        resp,
      })
    );
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
                      <Form.Control
                        type="text"
                        className={"mb-2 workCompany" + jobAmount}
                        placeholder="Microsoft LLC."
                        value={company}
                        onChange={(event) => {
                          setCompany(event.target.value);
                        }}
                      />
                    </FloatingLabel>

                    <FloatingLabel label="Job Title">
                      <Form.Control
                        type="text"
                        className={"mb-2 workPosition" + jobAmount}
                        placeholder="Senior Software Engineer"
                        value={position}
                        onChange={(event) => {
                          setPosition(event.target.value);
                        }}
                      />
                    </FloatingLabel>
                    <Row>
                      <Col md={6}>
                        <FloatingLabel label="Start Date">
                          <Form.Control
                            type="date"
                            className={"mb-2 workStartDate" + jobAmount}
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
                            className={"mb-2 workEndDate" + jobAmount}
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
                      <Col md={12}>
                        <FloatingLabel label="City, State, Country">
                          <Form.Control
                            type="text"
                            className={"mb-2 workLocation" + jobAmount}
                            placeholder="Boston"
                            value={location}
                            onChange={(event) => {
                              setLocation(event.target.value);
                            }}
                          />
                        </FloatingLabel>
                      </Col>
                      {resp.map((curr, index) => {
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
                                    onChange={(event) =>
                                      handleResp(index, event)
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
          <Button onClick={() => CommitValues("submit")}>Submit</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalWork;
