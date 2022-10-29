import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import Context from "../../context/Context";
import { FloatingLabel } from "react-bootstrap";

function ModalGenInfo(props) {
  const { displayGeneralInfo } = useContext(Context);

  // Fetching localStorage data if there is any
  const data = JSON.parse(window.localStorage.getItem("GenInfo"));

  function valueFetching() {
    if (data) {
      return data;
    } else {
      return [valuesInstance];
    }
  }

  const valuesInstance = {
    name: "Kamen Kanchev",
    position: "Front-end Developer",
    address: "Boston, MA",
    email: "kkanchev94@gmail.com",
    phone: "619-817-5266",
    website: "https://kkanchev.netlify.app",
    github: "https://github.com/skyllex94",
    linkedin: "https://www.linkedin.com/in/kamen-kanchev-73a282175",
  };

  const [values, setValues] = useState(valueFetching);

  // If there's local data, display the content of it as the page loads
  useEffect(() => {
    if (data) {
      displayGeneralInfo(props.onHide, data);
      updateLocalStorage();
    }
  }, []);

  function updateLocalStorage() {
    window.localStorage.setItem("GenInfo", JSON.stringify(values));
  }

  // When a change is made on any of the input fields, it will automatically
  // update the localStorage values, so they are persisted if the page reloads
  // useEffect(() => {
  //   window.localStorage.setItem("GenInfo", JSON.stringify(values));
  // }, [values]);

  const updateValue = (keyName, event) => {
    const updatedObj = { ...values };
    updatedObj[keyName] = event.target.value;
    setValues(updatedObj);
  };

  const CommitValues = (e) => {
    if (e.key === "Enter" || e === "commit") {
      displayGeneralInfo(props.onHide, values);
      updateLocalStorage();
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
            General Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <FloatingLabel label="Full Name">
                      <Form.Control
                        type="text"
                        placeholder="John Doe"
                        className="modalName mb-2"
                        autoFocus
                        value={values.name}
                        onChange={(e) => updateValue("name", e)}
                      />
                    </FloatingLabel>
                    <FloatingLabel label="Position">
                      <Form.Control
                        type="text"
                        placeholder="Front-end Developer"
                        className="modalPosition mb-2"
                        value={values.position}
                        onChange={(e) => updateValue("position", e)}
                      />
                    </FloatingLabel>
                    <FloatingLabel label="Address">
                      <Form.Control
                        type="text"
                        placeholder="City, State, Country"
                        className="modalAddress mb-2"
                        value={values.address}
                        onChange={(e) => updateValue("address", e)}
                      />
                    </FloatingLabel>

                    <FloatingLabel label="Email Address">
                      <Form.Control
                        type="email"
                        placeholder="name@email.com"
                        className="modalEmail mb-2"
                        value={values.email}
                        onChange={(e) => updateValue("email", e)}
                      />
                    </FloatingLabel>

                    <FloatingLabel label="Phone Number">
                      <Form.Control
                        type="text"
                        placeholder="(700)-800-9000"
                        className="modalPhone mb-2"
                        value={values.phone}
                        onChange={(e) => updateValue("phone", e)}
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={6} md={4}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <FloatingLabel label="Portfolio Website">
                    <Form.Control
                      type="text"
                      placeholder="http://myportfolio.com"
                      className="modalWebsite mb-2"
                      value={values.website}
                      onChange={(e) => updateValue("website", e)}
                    />
                  </FloatingLabel>

                  <FloatingLabel label="GitHub">
                    <Form.Control
                      type="text"
                      placeholder="http://github.com/username"
                      className="modalGithub mb-2"
                      value={values.github}
                      onChange={(e) => updateValue("github", e)}
                    />
                  </FloatingLabel>

                  <FloatingLabel label="LinkedIn">
                    <Form.Control
                      type="text"
                      placeholder="http://linkedin.com/username"
                      value={values.linkedin}
                      onChange={(e) => updateValue("linkedin", e)}
                      className="modalLinkedin mb-2"
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => CommitValues("commit")}>Submit</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalGenInfo;
