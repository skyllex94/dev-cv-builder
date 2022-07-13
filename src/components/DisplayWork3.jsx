import React from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";

import { Draggable } from "react-beautiful-dnd";

function DisplayWork3() {
  return (
    <Draggable draggableId="5" key="5" index={5}>
      {(provided) => (
        <Row
          className="workSec ps-5 pt-2"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Row className="workField2">
            <Col md={12} className="d-flex">
              <Form.Label className="textCompany3"></Form.Label>
            </Col>
            <Col md={12} className="work-position3 d-flex">
              <div className="textWorkPosition3 me-2" />
              <div className="work-period3 d-none">
                <Col className="d-flex ">
                  | <div className="textWorkStartDate3 ms-2 me-1" /> -
                  <div className="textWorkEndDate3 me-2 ms-1" />
                  <Col className="work-location-group3 d-flex">
                    | <div className="textWorkLocation3 ms-2" />
                    <div className="textWorkLocation3 me-2" />
                    <div className="textWorkLocation3 me-2" />
                  </Col>
                </Col>
              </div>
            </Col>
            <Col md={12} className="work-location-group3 d-flex">
              <div className="textWorkLocation3" />
              <div className="textWorkLocation3 me-2" />
              <div className="textWorkLocation3 me-2" />
            </Col>
            <Col md={12} className="work-responsibilities3 d-flex">
              <div className="textResponsibilities3">
                <p className="text03 mb-0 d-none"></p>
                <p className="text13 mb-0 d-none"></p>
                <p className="text23 mb-0 d-none"></p>
              </div>
            </Col>
          </Row>

          {provided.placeholder}
        </Row>
      )}
    </Draggable>
  );
}

export default DisplayWork3;
