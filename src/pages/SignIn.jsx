import React, { useState, useEffect } from "react";
// DOM imports from Bootstrap
import Header from "../components/Header";
import {
  Container,
  Form,
  Row,
  Col,
  Card,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { HorizontalLineWtLabel } from "../utils/Utils";

import { useNavigate } from "react-router-dom";

// Firebase, Firestore dependencies
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import GoogleOAuth from "../components/GoogleOAuth";
import { toast } from "react-toastify";

function SignIn() {
  // Check if user is already logged-in
  const navigate = useNavigate();
  const data = JSON.parse(window.localStorage.getItem("UserData"));
  useEffect(() => {
    if (data) {
      navigate("/templates");
    }
  }, [navigate, data]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const [passVisible, setPassVisible] = useState(false);

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
        console.log(signingUser.user);
        const credentialsToStore = {
          name: signingUser.user.displayName,
          email: signingUser.user.email,
        };

        // Store data in localStorage
        window.localStorage.setItem(
          "UserData",
          JSON.stringify(credentialsToStore)
        );

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
          <Col md={6}>
            <Card>
              <p className="text-center h3 fw-bold mb-2 mx-1 mx-md-4 mt-4">
                Log in
              </p>
              <Container className="px-5">
                <Form onSubmit={onSubmit}>
                  <div className="d-grid gap-2">
                    <GoogleOAuth />
                  </div>

                  <HorizontalLineWtLabel label="or" />

                  <Row className="mb-4">
                    <Col>
                      <FloatingLabel
                        label="Email address"
                        className="text-start mb-3"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => onChange(e, "email")}
                        />
                      </FloatingLabel>
                    </Col>

                    <Row>
                      <Col xs={11} sm={11} md={11} className="me-0 pe-3 ">
                        <FloatingLabel label="Password" className="text-start">
                          <Form.Control
                            type={passVisible ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => onChange(e, "password")}
                          />
                        </FloatingLabel>
                      </Col>
                      <Col
                        md={1}
                        sm={1}
                        xs={1}
                        className="d-flex m-0 p-0 align-items-center"
                      >
                        <AiFillEye
                          onClick={() =>
                            setPassVisible((prevState) => !prevState)
                          }
                          size="26px"
                        />
                      </Col>
                    </Row>
                  </Row>

                  <Row className="justify-content-center align-items-center">
                    <Col className="col-auto">
                      <Button
                        className="mb-3 px-5"
                        variant="primary"
                        type="submit"
                      >
                        Sign-in
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Container>
            </Card>

            <label
              style={{ cursor: "pointer" }}
              className="mt-3"
              onClick={() => navigate("/signup")}
            >
              Sign up Instead
            </label>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignIn;
