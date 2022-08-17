import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import { HorizontalLine } from "../utils/Utils";

import { HiLocationMarker } from "react-icons/hi";
import { BiMailSend } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineLink, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function DisplayContact() {
  return (
    <Row className="mt-3">
      <Col md={12}>
        <div className="section-titles-contact">Contact</div>
        <HorizontalLine />
      </Col>

      <Col md={12}>
        <Row className="text-start justify-content-start">
          <Row className="address d-none">
            <Col className="col-1">
              <HiLocationMarker />
            </Col>
            <Col className="col-10">
              <Form.Label className="textAddress" />
            </Col>
          </Row>
          <Row className="email d-none">
            <Col className="col-1">
              <BiMailSend />
            </Col>
            <Col className="col-10">
              <Form.Label className="textEmail" />
            </Col>
          </Row>
          <Row className="phone d-none">
            <Col className="col-1">
              <FiPhone />
            </Col>
            <Col className="col-10">
              <Form.Label className="textPhone" />
            </Col>
          </Row>
          <Row className="website d-none">
            <Col className="col-1">
              <AiOutlineLink />
            </Col>
            <Col className="col-10">
              <Form.Label className="textWebsite" />
            </Col>
          </Row>
          <Row className="github d-none">
            <Col className="col-1">
              <AiFillGithub />
            </Col>
            <Col className="col-10">
              <Form.Label className="textGithub" />
            </Col>
          </Row>
          <Row className="linkedin d-none">
            <Col className="col-1">
              <AiFillLinkedin />
            </Col>
            <Col className="col-10">
              <Form.Label className="textLinkedin" />
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
  );
}

export default DisplayContact;
