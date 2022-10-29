import React, { useContext } from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";

import { GrLocation } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineLink, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import Context from "../../context/Context";
import { useEffect } from "react";
import { useState } from "react";

function DisplayGenInfo(props) {
  // Template settings
  const location = useLocation();
  const { template } = location.state;
  const { genInfo } = useContext(Context);

  const { name, position, email, address, phone, website, github, linkedin } =
    genInfo;

  return template === "earth" ? (
    <Row className={props.name + " text-start"}>
      {name && (
        <Col className="col-12 d-flex pt-4">
          <Form.Label className="textName">{name}</Form.Label>
        </Col>
      )}

      {position && (
        <Col className="col-12">
          <Form.Label className="textPosition">{position}</Form.Label>
        </Col>
      )}

      {(address || email || phone) && (
        <Col xs={5} className="col-auto">
          <Row>
            {address && (
              <Col xs={12}>
                <GrLocation className="me-2" />
                <Form.Label className="gen-info-style mb-0">
                  {address}
                </Form.Label>
              </Col>
            )}

            {email && (
              <Col xs={12}>
                <BiMailSend className="me-2" />
                <Form.Label className="gen-info-style mb-0">{email}</Form.Label>
              </Col>
            )}

            {phone && (
              <Col xs={12}>
                <FiPhone className="me-2" />
                <Form.Label className="gen-info-style mb-0">{phone}</Form.Label>
              </Col>
            )}
          </Row>
        </Col>
      )}

      <Col xs={7} className="col-auto">
        <Row>
          {website && (
            <Col xs={12}>
              <AiOutlineLink className="me-2" />
              <Form.Label className="gen-info-style mb-0">{website}</Form.Label>
            </Col>
          )}

          {github && (
            <Col xs={12}>
              <AiFillGithub className="me-2" />
              <Form.Label className="gen-info-style mb-0">{github}</Form.Label>
            </Col>
          )}

          {linkedin && (
            <Col xs={12}>
              <AiFillLinkedin />
              <Form.Label className="ms-1 mb-0 gen-info-style">
                {linkedin}
              </Form.Label>
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  ) : template === "venus" ? (
    <Row className={props.name + " text-start"}>
      {name && (
        <Col xs={12} className="pt-4">
          <Form.Label className="textName text-white">{name}</Form.Label>
        </Col>
      )}

      {position && (
        <Col xs={12}>
          <Form.Label className="textPosition text-white">
            {position}
          </Form.Label>
        </Col>
      )}
    </Row>
  ) : null;
}

export default DisplayGenInfo;
