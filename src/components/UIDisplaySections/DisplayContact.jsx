import React, { useContext } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import { HorizontalLine } from "../../utils/Utils";

import { HiLocationMarker } from "react-icons/hi";
import { BiMailSend } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineLink, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import Context from "../../context/Context";
import { truncate, createLink } from "./DisplayFunctions";

function DisplayContact() {
  const { genInfo } = useContext(Context);

  const {
    email,
    addressCity,
    addressState,
    addressZIP,
    phone,
    website,
    github,
    linkedin,
  } = genInfo;

  return (
    <Row className="pt-3 contactSection">
      <Col md={12}>
        <div className="section-titles-contact">Contact</div>
        <HorizontalLine />
      </Col>

      <Col md={12}>
        <Row className="text-start justify-content-start ">
          {(addressCity || addressState || addressZIP) && (
            <Col className="col-auto">
              <HiLocationMarker className="me-2" />
              <Form.Label className="gen-info-style">
                {addressCity}, {addressState}, {addressZIP}
              </Form.Label>
            </Col>
          )}
          {email && (
            <Col className="col-auto">
              <BiMailSend className="me-2" />
              <Form.Label className="gen-info-style">{email}</Form.Label>
            </Col>
          )}
          {phone && (
            <Col className="col-auto">
              <FiPhone className="me-2" />
              <Form.Label className="gen-info-style">{phone}</Form.Label>
            </Col>
          )}
          {website && (
            <Col className="col-auto">
              <AiOutlineLink className="me-2" />
              <Form.Label className="gen-info-style">
                {truncate(website)}
              </Form.Label>
            </Col>
          )}
          {github && (
            <Col className="col-auto">
              <AiFillGithub className="me-2" />
              <Form.Label className="gen-info-style">
                {truncate(github)}
              </Form.Label>
            </Col>
          )}
          {linkedin && (
            <Col className="col-auto">
              <AiFillLinkedin className="me-2" />
              <Form.Label className="gen-info-style">
                {truncate(linkedin)}
              </Form.Label>
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  );
}

export default DisplayContact;
