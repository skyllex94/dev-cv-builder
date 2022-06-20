import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Context from "../context/Context";
import Form from "react-bootstrap/Form";
import { FaAddressCard } from "react-icons/fa";

export const CVPreview = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Row>
        <Col className="col-12 d-flex pt-2">
          <Form className="pt-4 ps-5">
            <Form.Label className="previewName"></Form.Label>
          </Form>
        </Col>
        <Col className="col-12 d-flex ">
          <Form className="ps-5">
            <Form.Label className="previewPosition"></Form.Label>
          </Form>
        </Col>
        <Col className="col-12 d-flex ">
          <Form className="ps-5">
            <FaAddressCard />
            <Form.Label className="previewPosition"></Form.Label>
          </Form>
        </Col>
      </Row>
    </div>
  );
});

export default CVPreview;
