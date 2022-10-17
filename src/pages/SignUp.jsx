import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Bootstrap imports
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// Image-based import
import { MDBCardImage } from "mdb-react-ui-kit";

// Google Firebase Auth & Firestore imports
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const [repeatPass, setRepeatPass] = useState("");
  const [passToggle, setPassToggle] = useState(false);

  const navigate = useNavigate();

  const onChange = (event, keyName) => {
    setFormData({ ...formData, [keyName]: event.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

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

      // Storing the data in the the Firestore Database
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      // Create a new document in the "users" collection and adding the data for the user
      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      alert(error.message);
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
                    <Form.Group className="mb-3">
                      <Form.Label className="d-flex">Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => onChange(e, "name")}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="d-flex">Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => onChange(e, "email")}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="d-flex">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => onChange(e, "password")}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="d-flex">
                        Repeat Password
                      </Form.Label>
                      <Form.Control
                        className="mb-3"
                        type="password"
                        placeholder="Password"
                        value={repeatPass}
                        onChange={(e) => setRepeatPass(e.target.value)}
                      />
                    </Form.Group>

                    <Button className="mb-3" variant="primary" type="submit">
                      Create an Account
                    </Button>
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
