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
        "Trustworthy, sociable, and willing to go through the hardship of learning any new type of skill set necessary for improved performance and quality standards. Built useful experience in different areas with the main one of them - interest in software engineering. I have been working in the restaurant business as I have obtained my residence in the US, and now ready for a full-scale carrier in programming and computer science.",
    },
    {
      paragraph:
        "Carrier-switch to Software Engineering officially in 5 months to full-time, currently learning C to understand the lowlevel mechanics of manually creating hash tables, data structures, dynamic memory allocation and freeing, and the infamous pointers.",
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
  useEffect(() => {
    window.localStorage.setItem(
      "Summary",
      JSON.stringify({
        paragraphs,
      })
    );
  }, [paragraphs]);

  const handleValueChange = (index, event) => {
    const values = [...paragraphs];
    values[index][event.target.name] = event.target.value;
    setParagraphs(values);
  };

  const ModalEnterPressed = (e) => {
    if (e.key === "Enter") {
      displaySummary(props.onHide, paragraphs);
    }
  };

  const addParagraph = () => {
    if (paragraphs.length < 3) {
      setParagraphs([
        ...paragraphs,
        {
          paragraph: "",
        },
      ]);
    }
  };

  const removeParagraph = (index) => {
    if (paragraphs.length > 1 && paragraphs.length === index + 1) {
      const values = [...paragraphs];
      values.splice(index, 1);
      setParagraphs(values);
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
            <Row className="mt-2 px-2 d-flex">
              <Button className="d-inline" onClick={addParagraph}>
                Add Paragraph
              </Button>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => displaySummary(props.onHide, paragraphs)}>
            Submit
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalSummary;
