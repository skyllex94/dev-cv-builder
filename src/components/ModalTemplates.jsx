import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import earthTemplate from "../img/earthTempThumbnail.png";
import venusTemplate from "../img/venusTempThumbnail.png";

function ModalTemplates(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Templates</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col className="d-flex mb-2" md={6} xs={6}>
              <Link to="/build" state={{ template: "earth" }}>
                <Card className="template-styling text-center">
                  <Card.Img variant="top" src={earthTemplate} />
                  <Card.Body>
                    <Card.Title>Template "Earth"</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="d-flex mb-2" md={6} xs={6}>
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
      </Modal.Body>
    </Modal>
  );
}

export default ModalTemplates;
