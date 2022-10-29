import React, { useContext } from "react";
import {
  Button,
  Col,
  Container,
  Modal,
  Row,
  Form,
  FloatingLabel,
} from "react-bootstrap";

import Context from "../../context/Context";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { updateValuesInLocalStorage } from "../ContPanelSections/ContPanelFunctions";

function ModalCertification(props) {
  const { displayCertification } = useContext(Context);
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
      displayCertification(values);
      updateValuesInLocalStorage(values, "Certification");
      onHide();
    }
  };

  function updateValues(targetValue, keyName, index) {
    const updatedValues = [...values];
    updatedValues[index][keyName] = targetValue;
    setValues(updatedValues);
  }

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
            Certificate or License {i + 1}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col md={12}>
                <Form>
                  <Form.Group className="mb-3">
                    <FloatingLabel label="Certification">
                      <Form.Control
                        type="text"
                        className="mb-2"
                        placeholder="Harvard Course"
                        value={values[i].certification}
                        onChange={(event) => {
                          updateValues(event.target.value, "certification", i);
                        }}
                      />
                    </FloatingLabel>

                    <FloatingLabel label="Issued By:">
                      <Form.Control
                        type="text"
                        className="mb-2"
                        placeholder="Harvard Online"
                        value={values[i].issuedBy}
                        onChange={(event) => {
                          updateValues(event.target.value, "issuedBy", i);
                        }}
                      />
                    </FloatingLabel>

                    <Row>
                      <Col md={6}>
                        <FloatingLabel label="Start Date">
                          <Form.Control
                            type="date"
                            className="mb-2"
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
                            type="date"
                            className="mb-2"
                            placeholder="12/2022"
                            value={values[i].endDate}
                            onChange={(event) => {
                              updateValues(event.target.value, "endDate", i);
                            }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row>
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

export default ModalCertification;
