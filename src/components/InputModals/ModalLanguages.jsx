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

function ModalLanguages(props) {
  const { displayInlineText } = useContext(Context);

  const [languages, setLanguages] = useState([
    {
      language: "English",
    },
    {
      language: "Bulgarian",
    },
    {
      language: "Spanish",
    },
  ]);

  const insertLanguages = (event, index) => {
    const values = [...languages];
    values[index][event.target.name] = event.target.value;
    setLanguages(values);
  };

  function addLanguages() {
    const values = [...languages, { language: "" }];
    setLanguages(values);
  }

  const removeLanguage = (index) => {
    const values = [...languages];
    values.splice(index, 1);
    setLanguages(values);
  };

  const ModalEnterPressed = (e) => {
    if (e.key === "Enter") {
      displayInlineText(props.onHide, languages, "languagesGroup");
    }
  };

  return (
    <div onKeyPress={(event) => ModalEnterPressed(event)}>
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
                          onChange={(event) => insertLanguages(event, index)}
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
              <Button className="mb-2" onClick={addLanguages}>
                Add
              </Button>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() =>
              displayInlineText(props.onHide, languages, "languagesGroup")
            }
          >
            Submit
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalLanguages;
