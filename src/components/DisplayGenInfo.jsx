import React from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";

import { GrLocation } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineLink, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { useLocation } from "react-router-dom";

function DisplayGenInfo(props) {
  // Template settings
  const location = useLocation();
  const { template } = location.state;

  return template === "earth" ? (
    <Row className={props.name + " text-start"}>
      <Col className="name col-12 d-flex pt-1 d-none">
        <Form className="pt-4">
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
  ) : template === "venus" ? (
    <Row className={props.name + " text-start"}>
      <Col className="name col-12 pt-1 d-none">
        <Form className="pt-4">
          <Form.Label className="textName text-white"></Form.Label>
        </Form>
      </Col>
      <Col className="position text-white col-12 d-none">
        <Form>
          <Form.Label className="textPosition text-white"></Form.Label>
        </Form>
      </Col>
    </Row>
  ) : null;
}

export default DisplayGenInfo;
