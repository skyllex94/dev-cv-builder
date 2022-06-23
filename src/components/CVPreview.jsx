import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Form from "react-bootstrap/Form";
import { GrLocation } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineLink, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { Linkedin, Linkedinn } from "./ModalInfoContent";

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
          <Col className="col-5 d-flex">
            <Form>
              <GrLocation className="addressIcon d-none" />
              <Form.Label className="ms-1 mb-0 previewAddress"></Form.Label>
            </Form>
          </Col>
          <Col className="col-7 d-flex">
            <Form>
              <AiOutlineLink className="websiteIcon d-none" />
              <Form.Label className="ms-1 mb-0 previewWebsite"></Form.Label>
            </Form>
          </Col>
          <Col className="col-5 d-flex">
            <Form>
              <BiMailSend className="emailIcon d-none" />
              <Form.Label className="ms-1 mb-0 previewEmail"></Form.Label>
            </Form>
          </Col>
          <Col className="col-7 d-flex">
            <Form>
              <AiFillGithub className="githubIcon d-none" />
              <Form.Label className="ms-1 mb-0 previewGithub"></Form.Label>
            </Form>
          </Col>
          <Linkedinn isDisplayed={true} />
          <Col className="col-5 d-flex">
            <Form>
              <FiPhone className="phoneIcon d-none" />
              <Form.Label className="ms-1 mb-0 previewPhone"></Form.Label>
            </Form>
          </Col>
        </Row>
      </Row>
    </div>
  );
});

export default CVPreview;
