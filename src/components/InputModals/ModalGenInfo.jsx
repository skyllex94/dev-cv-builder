import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import Context from "../../context/Context";

function ModalGenInfo(props) {
  const { displayGeneralInfo } = useContext(Context);

  const [name, setName] = useState("Kamen Kanchev");
  const [position, setPosition] = useState("Front-end Developer");

  const [addressCity, setAddressCity] = useState("Boston");
  const [addressState, setAddressState] = useState("MA");
  const [addressZIP, setAddressZIP] = useState("02130");

  const [email, setEmail] = useState("kkanchev94@gmail.com");
  const [phone, setPhone] = useState("619-817-5266");
  const [website, setWebsite] = useState("https://kkanchev.netlify.app");
  const [github, setGithub] = useState("https://github.com/skyllex94");
  const [linkedin, setLinkedin] = useState(
    "https://www.linkedin.com/in/kamen-kanchev-73a282175"
  );

  const persistName = (event) => {
    setName(event.target.value);
  };
  const persistPosition = (event) => {
    setPosition(event.target.value);
  };

  const persistAddressCity = (event) => {
    setAddressCity(event.target.value);
  };
  const persistAddressState = (event) => {
    setAddressState(event.target.value);
  };
  const persistAddressZIP = (event) => {
    setAddressZIP(event.target.value);
  };

  const persistEmail = (event) => {
    setEmail(event.target.value);
  };
  const persistPhone = (event) => {
    setPhone(event.target.value);
  };
  const persistWebsite = (event) => {
    setWebsite(event.target.value);
  };
  const persistGithub = (event) => {
    setGithub(event.target.value);
  };
  const persistLinkedin = (event) => {
    setLinkedin(event.target.value);
  };

  const ModalEnterPressed = (e) => {
    if (e.key === "Enter") {
      displayGeneralInfo(props.onHide);
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
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="John Doe"
                      className="modalName mb-2"
                      autoFocus
                      value={name}
                      onChange={persistName}
                    />
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Front-end Developer"
                      className="modalPosition mb-2"
                      value={position}
                      onChange={persistPosition}
                    />
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="City"
                      className="modalAddress mb-2"
                      value={addressCity}
                      onChange={persistAddressCity}
                    />
                    <Row>
                      <Col className="col-6">
                        <Form.Control
                          type="text"
                          placeholder="State"
                          className="modalAddress mb-2"
                          value={addressState}
                          onChange={persistAddressState}
                        />
                      </Col>
                      <Col className="col-6">
                        <Form.Control
                          type="number"
                          placeholder="ZIP Code"
                          className="modalAddress mb-2"
                          value={addressZIP}
                          onChange={persistAddressZIP}
                        />
                      </Col>
                    </Row>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@email.com"
                      className="modalEmail mb-2"
                      value={email}
                      onChange={persistEmail}
                    />
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="(700)-800-9000"
                      className="modalPhone mb-2"
                      value={phone}
                      onChange={persistPhone}
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={6} md={4}>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Website</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="http://myportfolio.com"
                      className="modalWebsite mb-2"
                      value={website}
                      onChange={persistWebsite}
                    />
                    <Form.Label>Github</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="http://github.com/username"
                      className="modalGithub mb-2"
                      value={github}
                      onChange={persistGithub}
                    />
                    <Form.Label>LinkedIn</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="http://linkedin.com/username"
                      value={linkedin}
                      onChange={persistLinkedin}
                      className="modalLinkedin mb-2"
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => displayGeneralInfo(props.onHide)}>
            Submit
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalGenInfo;
