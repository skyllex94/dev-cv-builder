import React, { useState } from "react";
// DOM imports from Bootstrap
import Header from "../components/Header";
import { Container, Form, Row, Col, Card, Button } from "react-bootstrap";
import { BsPersonBoundingBox } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

// Firebase, Firestore dependencies
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import GoogleOAuth from "../components/GoogleOAuth";
import { toast } from "react-toastify";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const [passToggle, setPassToggle] = useState(false);

  const navigate = useNavigate();

  const onChange = (event, keyName) => {
    setFormData({ ...formData, [keyName]: event.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const signingUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (signingUser.user) {
        navigate("/templates");
      }
    } catch (error) {
      toast.error("Wrong or non-existent credentials, please try again");
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={6} className="justify-content-center">
            <Card>
              <span className="mt-4">
                <BsPersonBoundingBox size={40} />
              </span>

              <p className="text-center h3 fw-bold mb-2 mx-1 mx-md-4 mt-4">
                Log in
              </p>
              <Container className="px-5">
                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="d-flex">Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => onChange(e, "email")}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="d-flex">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => onChange(e, "password")}
                    />
                    <p
                      className="ms-4"
                      onClick={() => setPassToggle((prevState) => !prevState)}
                    >
                      Show Password
                    </p>
                  </Form.Group>
                  {passToggle && email}
                  <Row className="justify-content-center align-items-center">
                    <Col className="col-auto">
                      <Button
                        className="mb-3 px-5"
                        variant="primary"
                        type="submit"
                      >
                        Log in
                      </Button>
                    </Col>
                    <Col className="col-auto">
                      <GoogleOAuth />
                    </Col>
                    <Col className="col-auto">
                      <p className="ms-3" onClick={() => navigate("/signup")}>
                        Sign up Instead
                      </p>
                    </Col>
                  </Row>
                </Form>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignIn;
