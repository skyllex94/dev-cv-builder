import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Bootstrap imports
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
// Image-based import
import { MDBCardImage } from "mdb-react-ui-kit";
import GoogleOAuth from "../components/GoogleOAuth";

import { AiFillEye } from "react-icons/ai";
import { HorizontalLineWtLabel } from "../utils/Utils";

// Google Firebase Auth & Firestore imports
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

function SignUp() {
  // Check if user is already logged-in
  const navigate = useNavigate();
  const data = JSON.parse(window.localStorage.getItem("UserData"));
  useEffect(() => {
    if (data) {
      navigate("/templates");
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const [repeatPass, setRepeatPass] = useState("");
  const [passVisible, setPassVisible] = useState(false);
  const [passVisible2, setPassVisible2] = useState(false);

  const onChange = (event, keyName) => {
    setFormData({ ...formData, [keyName]: event.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (name && email && password && repeatPass !== null) {
      if (password === repeatPass) {
        try {
          const auth = getAuth();
          const newUser = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = newUser.user;
          updateProfile(auth.currentUser, {
            displayName: name,
          });

          // Storting the data in the the Firestore Database
          const formDataCopy = { ...formData };
          delete formDataCopy.password;
          formDataCopy.timestamp = serverTimestamp();

          // Create a new document in the "users" collection and adding the data for the user
          await setDoc(doc(db, "users", user.uid), formDataCopy);

          console.log(user);
          const credentialsToStore = {
            name: user.displayName,
            email: user.email,
          };
          window.localStorage.setItem(
            "UserData",
            JSON.stringify(credentialsToStore)
          );

          navigate("/templates");
        } catch (error) {
          alert(error.message);
        }
      } else {
        toast.error("Password fields do not match");
      }
    } else {
      toast.warning("Please fill-in all fields");
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <main className="px-4">
          <Card>
            <Row className="d-flex align-items-center">
              <Col md={6}>
                <p className="text-center h3 fw-bold mb-2 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <Container className="px-5">
                  <Form onSubmit={onSubmit}>
                    <Row>
                      <GoogleOAuth />
                    </Row>

                    <HorizontalLineWtLabel label="or" />

                    <Form.Group className="mb-3">
                      <FloatingLabel
                        label="Full Name"
                        className="text-start mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          value={name}
                          onChange={(e) => onChange(e, "name")}
                        />
                      </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <FloatingLabel
                        label="Email Address"
                        className="text-start mb-3"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => onChange(e, "email")}
                        />
                      </FloatingLabel>
                    </Form.Group>

                    <Row className="d-flex align-items-center">
                      <Col md={11} sm={11} xs={11} className="me-0 pe-3">
                        <Form.Group>
                          <FloatingLabel
                            label="Password"
                            className="text-start"
                          >
                            <Form.Control
                              type={passVisible ? "text" : "password"}
                              placeholder="Password"
                              value={password}
                              onChange={(e) => onChange(e, "password")}
                            />
                          </FloatingLabel>
                        </Form.Group>
                      </Col>
                      <Col md={1} sm={1} xs={1} className="m-0 p-0 ">
                        <AiFillEye
                          onClick={() =>
                            setPassVisible((prevState) => !prevState)
                          }
                          size="26px"
                        />
                      </Col>
                    </Row>

                    <div className="mb-3" />

                    <Row className="d-flex align-items-center">
                      <Col md={11} sm={11} xs={11} className="me-0 pe-3">
                        <Form.Group>
                          <FloatingLabel
                            label="Repeat Password"
                            className="text-start"
                          >
                            <Form.Control
                              type={passVisible2 ? "text" : "password"}
                              placeholder="Password"
                              value={repeatPass}
                              onChange={(e) => setRepeatPass(e.target.value)}
                            />
                          </FloatingLabel>
                        </Form.Group>
                      </Col>
                      <Col md={1} sm={1} xs={1} className="m-0 p-0 ">
                        <AiFillEye
                          onClick={() =>
                            setPassVisible2((prevState) => !prevState)
                          }
                          size="26px"
                        />
                      </Col>
                    </Row>

                    <div className="mb-3" />

                    <Row className="d-flex justify-content-center align-items-center">
                      <Col md="auto">
                        <Button variant="primary" type="submit">
                          Create an Account
                        </Button>
                      </Col>
                      <Col md="auto">
                        <label
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/signin")}
                        >
                          Log in Instead
                        </label>
                      </Col>
                    </Row>

                    <div className="mb-3" />
                  </Form>
                </Container>
              </Col>

              <Col md={6}>
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </Col>
            </Row>
          </Card>
        </main>
      </Container>
    </div>
  );
}

export default SignUp;
