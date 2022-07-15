import React from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";

import { Draggable } from "react-beautiful-dnd";

export const HorizontalLine = () => (
  <hr
    style={{
      color: "black",
      backgroundColor: "black",
      height: 0.5,
    }}
  />
);

function DisplayWork() {
  return (
    <Draggable draggableId="3" key="3" index={3}>
      {(provided) => (
        <Row
          className="workSec ps-5 pt-2"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Row className="workField0">
            <Col md={12}>
              <div className="section-titles">Work Experience</div>
              <HorizontalLine />
            </Col>
            <Col md={12} className="d-flex">
              <Form.Label className="textCompany"></Form.Label>
            </Col>
            <Col md={12} className="work-position d-flex">
              <div className="textWorkPosition me-2" />
              <div className="work-period d-none">
                <Col className="d-flex ">
                  | <div className="textWorkStartDate ms-2 me-1" /> -
                  <div className="textWorkEndDate me-2 ms-1" />
                  <Col className="work-location-group d-flex">
                    | <div className="textWorkLocation ms-2" />
                    <div className="textWorkLocation me-2" />
                    <div className="textWorkLocation me-2" />
                  </Col>
                </Col>
              </div>
            </Col>

            <Col md={12} className="work-responsibilities d-flex">
              <div className="textResponsibilities">
                <p className="text0 mb-0 d-none"></p>
                <p className="text1 mb-0 d-none"></p>
                <p className="text2 mb-0 d-none"></p>
              </div>
            </Col>
          </Row>

          {provided.placeholder}
        </Row>
      )}
    </Draggable>
  );
}

export default DisplayWork;
