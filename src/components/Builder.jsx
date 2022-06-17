import Header from "./Header";
import ControlPanel from "./ControlPanel";
import Editor from "./Editor";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

import React from "react";

function Builder() {
  return (
    <div>
      <Header />
      <Container fluid className="p-4 bg-light">
        <Row className="d-flex">
          <Col className="col-3">
            <ControlPanel />
          </Col>
          <Col className="col-9 justify-content-center">
            <Editor />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Builder;
