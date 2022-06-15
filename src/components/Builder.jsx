import Header from "./Header";
import ControlPanel from "./ControlPanel";
import Editor from "./Editor";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

function Builder() {
  const componentRef = useRef();

  return (
    <div>
      <Header />
      <Container fluid className="p-4 bg-light">
        <Row>
          <Col className="col-3">
            <ControlPanel />
          </Col>
          <Col className="col-9 d-flex justify-content-center">
            <ReactToPrint
              trigger={() => (
                <button className="outline-dark">Print this out!</button>
              )}
              content={() => componentRef.current}
            />
            <Editor ref={componentRef} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Builder;
