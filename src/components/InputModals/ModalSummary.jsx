import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import Context from "../../context/Context";
import { VscChromeClose } from "react-icons/vsc";

function ModalSummary(props) {
  const { displaySummary } = useContext(Context);
  const [paragraphs, setParagraphs] = useState([
    {
      paragraph:
        "Write a brief general description about yourself and your skills & expertise. A small couple-sentence description of experience and strengths goes a long way.",
      // "Trustworthy, sociable, and willing to go through the hardship of learning any new type of skill set necessary for improved performance and quality standards. Built useful experience in different areas with the main one of them - interest in software engineering. I have been working in the restaurant business as I have obtained my residence in the US, and now ready for a full-scale carrier in programming and computer science.",
    },
  ]);

  // Fetch stored data and populate it in values of the input fields
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("Summary"));

    if (data != null) {
      setParagraphs(data.paragraphs);
    }
  }, []);

  // When a change is made on any of the input fields, it will automatically
  // update the localStorage values, so they are persisted if the page reloads
  const updateValuesInLocalStorage = () => {
    window.localStorage.setItem("Summary", JSON.stringify({ paragraphs }));
  };

  const handleValueChange = (index, event) => {
    const values = [...paragraphs];
    values[index][event.target.name] = event.target.value;
    setParagraphs(values);
  };

  const CommitValues = (e) => {
    if (e.key === "Enter" || e === "submit") {
      displaySummary(props.onHide, paragraphs);
      updateValuesInLocalStorage();
    }
  };

  const addParagraph = () => {
    if (paragraphs.length < 5) {
      setParagraphs([
        ...paragraphs,
        {
          paragraph: "",
        },
      ]);
    }
  };

  const removeParagraph = (index) => {
    if (paragraphs.length > 1) {
      const values = [...paragraphs];
      values.splice(index, 1);
      setParagraphs(values);
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
          <Modal.Title id="contained-modal-title-vcenter">Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Form.Label>Summary</Form.Label>
              {paragraphs.map((text, index) => {
                return (
                  <div key={index}>
                    <Row>
                      <Col md="11">
                        <Form>
                          <Form.Group>
                            <Form.Control
                              as="textarea"
                              autoFocus
                              className="modalSummary mb-2"
                              name="paragraph"
                              value={text.paragraph}
                              onChange={(event) =>
                                handleValueChange(index, event)
                              }
                              rows={3}
                            />
                          </Form.Group>
                        </Form>
                      </Col>
                      <Col md="1">
                        <Button
                          variant="white"
                          onClick={() => removeParagraph(index)}
                        >
                          <VscChromeClose />
                        </Button>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </Row>
            <Row className="mt-2 px-2 d-flex"></Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button className="d-inline" onClick={addParagraph}>
            Add Paragraph
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

export default ModalSummary;
