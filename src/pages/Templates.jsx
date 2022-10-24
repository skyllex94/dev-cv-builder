import { useState } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

// Firebaae/ Firestore imports
import { getAuth } from "firebase/auth";

import Header from "../components/Header";
import earthTemplate from "../img/earthTempThumbnail.png";
import venusTemplate from "../img/venusTempThumbnail.png";
import { useEffect } from "react";

function Templates() {
  // Check if user is already logged-in
  const navigate = useNavigate();
  const data = JSON.parse(window.localStorage.getItem("UserData"));

  function fetchUserData() {
    if (data) {
      return JSON.parse(JSON.stringify(data));
    } else {
      return { name: "", email: "" };
    }
  }

  useEffect(() => {
    if (formData.name === "" && formData.email === "") {
      navigate("/signup");
    }
  });

  const [formData, setFormData] = useState(fetchUserData);
  const { name, email } = formData;
  const auth = getAuth();

  const logOut = () => {
    auth.signOut();
    window.localStorage.removeItem("UserData");
    navigate("/signin");
  };

  return (
    <div>
      <Header username={name} />
      <Container>
        <p>Welcome, {name}</p>
        <Button onClick={logOut} className="float-right badge">
          Log Out
        </Button>

        <h1 className="text-center mb-4">Choose Your Template</h1>

        <Container>
          <Row className="justify-content-center">
            <Col className="d-flex mb-2" md={3} xs={6}>
              <Link to="/build" state={{ template: "earth" }}>
                <Card className="template-styling text-center">
                  <Card.Img variant="top" src={earthTemplate} />
                  <Card.Body>
                    <Card.Title>Template "Earth"</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="d-flex mb-2" md={3} xs={6}>
              <Link to="/build" state={{ template: "venus" }}>
                <Card className="template-styling text-center">
                  <Card.Img variant="top" src={venusTemplate} />
                  <Card.Body>
                    <Card.Title>Template "Venus"</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Templates;
