import Header from "./Header";
import ControlPanel from "./ControlPanel";
import Editor from "./Editor";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import React from "react";
import { useReactToPrint } from "react-to-print";
import { ContextProvider } from "../context/Context";
import { ImPageBreak } from "react-icons/im";
import { IoMdArrowDropleft } from "react-icons/io";

import { useLocation } from "react-router-dom";

function Builder() {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Current_CV",
  });

  // node --max_old_space_size=1560 node_modules/.bin/ - add when deploying to Heroku to start and build before react-scripts

  const location = useLocation();
  const { template } = location.state;

  return (
    <ContextProvider>
      <Header />
      <Container fluid className="p-4 bg-light">
        <Row className="d-flex justify-content-lg-center">
          <Col className="control-panel">
            <ControlPanel handlePrint={handlePrint} />
          </Col>
          <Col className="cv-preview">
            <Editor ref={componentRef} />
          </Col>

          <Col className="separatorSection">
            <div>
              <IoMdArrowDropleft />
              <ImPageBreak className="separator" />
            </div>
          </Col>
        </Row>
      </Container>
    </ContextProvider>
  );
}

export default Builder;
