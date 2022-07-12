import React from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";

import { GrLocation } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineLink, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Draggable } from "react-beautiful-dnd";

function DisplayGenInfo() {
  return (
    <Draggable draggableId="1" key="1" index={1}>
      {(provided) => (
        <Row
          className="general-info-section ps-5"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
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
          {provided.placeholder}
        </Row>
      )}
    </Draggable>
  );
}

export default DisplayGenInfo;
