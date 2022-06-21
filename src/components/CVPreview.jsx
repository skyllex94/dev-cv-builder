import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Context from "../context/Context";
import Form from "react-bootstrap/Form";
import { GrLocation } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";

export const CVPreview = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Row className="preview ps-5">
        <Col className="col-12 d-flex pt-2">
          <Form className="pt-4 ">
            <Form.Label className="previewName"></Form.Label>
          </Form>
        </Col>
        <Col className="col-12 d-flex ">
          <Form>
            <Form.Label className="previewPosition"></Form.Label>
          </Form>
        </Col>
        <Row>
          <Col className="col-12 d-flex">
            <Form>
              <GrLocation className="addressIcon" />
              <Form.Label className="ms-1 mb-0 previewAddress"></Form.Label>
            </Form>
          </Col>
          <Col className="col-12 d-flex">
            <Form>
              <BiMailSend className="emailIcon d-none" />
              <Form.Label className="ms-1 mb-0 previewEmail"></Form.Label>
            </Form>
          </Col>
        </Row>
      </Row>
    </div>
  );
});

export default CVPreview;
