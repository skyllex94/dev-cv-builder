import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Form from "react-bootstrap/Form";
import { GrLocation } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineLink, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const CVPreview = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Row className="general-info-section ps-5">
        <Col className="name col-12 d-flex pt-2 d-none">
          <Form className="pt-4 ">
            <Form.Label className="textName"></Form.Label>
          </Form>
        </Col>
        <Col className="position col-12 d-flex d-none">
          <Form>
            <Form.Label className="textPosition"></Form.Label>
          </Form>
        </Col>
        <Col className="col-5">
          <Row>
            <Col className="address col-12 d-flex d-none">
              <Form>
                <GrLocation />
                <Form.Label className="ms-1 mb-0 textAddress"></Form.Label>
              </Form>
            </Col>
            <Col className="email col-12 d-flex d-none">
              <Form>
                <BiMailSend />
                <Form.Label className="ms-1 mb-0 textEmail"></Form.Label>
              </Form>
            </Col>
            <Col className="phone col-12 d-flex d-none">
              <Form>
                <FiPhone />
                <Form.Label className="ms-1 mb-0 textPhone"></Form.Label>
              </Form>
            </Col>
          </Row>
        </Col>
        <Col className="col-7">
          <Row>
            <Col className="website col-12 d-flex d-none">
              <Form>
                <AiOutlineLink />
                <Form.Label className="ms-1 mb-0 textWebsite"></Form.Label>
              </Form>
            </Col>
            <Col className="github col-12 d-flex d-none">
              <Form>
                <AiFillGithub />
                <Form.Label className="ms-1 mb-0 textGithub"></Form.Label>
              </Form>
            </Col>
            <Col className="linkedin col-12 d-flex d-none">
              <Form>
                <AiFillLinkedin />
                <Form.Label className="ms-1 mb-0 textLinkedin"></Form.Label>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="summary">
        <Col md={12} className="summaryField d-flex d-none">
          <Form.Label className="textSummary"></Form.Label>
        </Col>
      </Row>
    </div>
  );
});

export default CVPreview;
