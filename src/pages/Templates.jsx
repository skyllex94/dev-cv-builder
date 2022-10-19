import { useState } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

// Firebaae/ Firestore imports
import { getAuth } from "firebase/auth";

import Header from "../components/Header";
import earthTemplate from "../img/earthTempThumbnail.png";
import venusTemplate from "../img/venusTempThumbnail.png";

function Templates() {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  const navigate = useNavigate();

  const logOut = () => {
    auth.signOut();
    navigate("/");
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
