import Header from "./Header";
import ControlPanel from "./ControlPanel";
import Editor from "./Editor";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import React from "react";
import { useReactToPrint } from "react-to-print";
import { ContextProvider } from "../context/Context";

function Builder() {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Current_CV",
  });

  return (
    <ContextProvider>
      <Header />
      <Container fluid className="p-4 bg-light">
        <Row className="d-flex">
          <Col className="col-3">
            <ControlPanel handlePrint={handlePrint} />
          </Col>
          <Col className="col-9 justify-content-center">
            <Editor ref={componentRef} />
          </Col>
        </Row>
      </Container>
    </ContextProvider>
  );
}

export default Builder;
