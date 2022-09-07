import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
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

  const allStateValues = {
    name,
    position,
    addressCity,
    addressState,
    addressZIP,
    email,
    phone,
    website,
    github,
    linkedin,
  };

  // Fetch stored data and populate it in values of the input fields
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("GenInfo"));

    if (data != null) {
      console.log(data.name);
      setName(data.name);
      setPosition(data.position);
      setAddressCity(data.addressCity);
      setAddressState(data.addressState);
      setAddressZIP(data.addressZIP);
      setEmail(data.email);
      setPhone(data.phone);
      setWebsite(data.website);
      setGithub(data.github);
      setLinkedin(data.linkedin);
    }
  }, []);

  // When a change is made on any of the input fields, it will automatically
  // update the localStorage values, so they are persisted if the page reloads
  useEffect(() => {
    window.localStorage.setItem(
      "GenInfo",
      JSON.stringify({
        name,
        position,
        addressCity,
        addressState,
        addressZIP,
        email,
        phone,
        website,
        github,
        linkedin,
      })
    );
  }, [allStateValues]);
  // TO DO: Try to trigger the useEffect only when the submit button is clicked

  const ModalEnterPressed = (event) => {
    if (event.key === "Enter") {
      displayGeneralInfo(props.onHide, allStateValues);
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
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Front-end Developer"
                      className="modalPosition mb-2"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="City"
                      className="modalAddress mb-2"
                      value={addressCity}
                      onChange={(e) => setAddressCity(e.target.value)}
                    />
                    <Row>
                      <Col className="col-6">
                        <Form.Control
                          type="text"
                          placeholder="State"
                          className="modalAddress mb-2"
                          value={addressState}
                          onChange={(e) => setAddressState(e.target.value)}
                        />
                      </Col>
                      <Col className="col-6">
                        <Form.Control
                          type="number"
                          placeholder="ZIP Code"
                          className="modalAddress mb-2"
                          value={addressZIP}
                          onChange={(e) => setAddressZIP(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@email.com"
                      className="modalEmail mb-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="(700)-800-9000"
                      className="modalPhone mb-2"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                    <Form.Label>Github</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="http://github.com/username"
                      className="modalGithub mb-2"
                      value={github}
                      onChange={(e) => setGithub(e.target.value)}
                    />
                    <Form.Label>LinkedIn</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="http://linkedin.com/username"
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      className="modalLinkedin mb-2"
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => displayGeneralInfo(props.onHide, allStateValues)}
          >
            Submit
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalGenInfo;
