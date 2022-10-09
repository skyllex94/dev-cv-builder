import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Context from "../../context/Context";
import { GrClose } from "react-icons/gr";
import { updateValuesInLocalStorage } from "../ContPanelSections/ContPanelFunctions";

function ModalLanguages(props) {
  const { displayInlineText } = useContext(Context);
  const data = JSON.parse(window.localStorage.getItem("Languages"));

  const [languages, setLanguages] = useState(dataRetrieval);

  // If no localStorage data, return an empty array to populate the state
  function dataRetrieval() {
    if (data !== null) {
      return data;
    } else {
      return [{ language: "" }];
    }
  }

  useEffect(() => {
    if (data !== null) {
      displayInlineText(data, "languages");
    }
  }, []);

  // On input change, update the value and pass in to state and localStorage update
  const updateLanguage = (event, index) => {
    const values = [...languages];
    values[index][event.target.name] = event.target.value;
    updateValues(values);
  };

  function addLanguage() {
    const values = [...languages, { language: "" }];
    updateValues(values);
  }

  const removeLanguage = (index) => {
    const values = [...languages];
    values.splice(index, 1);
    updateValues(values);
  };

  // Update the setState and the values in localStorage
  function updateValues(values) {
    setLanguages(values);
    updateValuesInLocalStorage(values, "Languages");
  }

  // Submit the data and pass it to Context to further use as it displays the info
  const CommitValues = (e) => {
    if (e.key === "Enter" || e === "submit") {
      displayInlineText(languages, "languages");
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
          <Modal.Title id="contained-modal-title-vcenter">
            Languages
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              {languages.map((language, index) => {
                return (
                  <Col className="d-flex mb-2 g-1" md={3} xs={6} key={index}>
                    <Form.Group>
                      <FloatingLabel label="Language">
                        <Form.Control
                          type="text"
                          name="language"
                          placeholder="English"
                          value={language.language}
                          onChange={(event) => updateLanguage(event, index)}
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Button
                      variant="white"
                      onClick={() => removeLanguage(index)}
                    >
                      <GrClose />
                    </Button>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button className="mb-2" onClick={addLanguage}>
            Add Language
          </Button>
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

export default ModalLanguages;
