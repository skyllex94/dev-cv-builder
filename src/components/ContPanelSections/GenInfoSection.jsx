import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";

import ModalGenInfo from "../ModalGenInfo";

function GenInfoSection() {
  const [modalGenInfo, setModalGenInfo] = useState(false);

  return (
    <Row>
      <Col md={10} className="d-flex justify-content-start">
        <Form.Label
          className="items-styling mt-2"
          type="text"
          onClick={() => setModalGenInfo(true)}
        >
          General Information
        </Form.Label>
      </Col>
      <ModalGenInfo show={modalGenInfo} onHide={() => setModalGenInfo(false)} />
    </Row>
  );
}

export default GenInfoSection;
