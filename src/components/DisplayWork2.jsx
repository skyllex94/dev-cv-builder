import React from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";

import { Draggable } from "react-beautiful-dnd";

const HorizontalLine = () => (
  <hr
    style={{
      color: "black",
      backgroundColor: "black",
      height: 1,
    }}
  />
);

function DisplayWork2() {
  return (
    <Draggable draggableId="3" key="3" index={3}>
      {(provided) => (
        <Row
          className="summary ps-5 pt-2"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Row className="workField">
            <Col md={12} className="d-flex">
              <Form.Label className="textCompany2"></Form.Label>
            </Col>
            <Col md={12} className="work-position2 d-flex">
              <div className="textWorkPosition2 me-2" />
              <div className="work-period2 d-none">
                <Col className="d-flex">
                  | <div className="textWorkStartDate2 ms-2 me-1" /> -
                  <div className="textWorkEndDate2 ms-1" />
                </Col>
              </div>
            </Col>
            <Col md={12} className="work-location-group2 d-flex">
              <div className="textWorkLocation2" />
              <div className="textWorkLocation2 me-2" />
              <div className="textWorkLocation2 me-2" />
            </Col>
            <Col md={12} className="work-responsibilities2 d-flex">
              <div className="textResponsibilities2">
                <p className="text02 mb-0 d-none"></p>
                <p className="text12 mb-0 d-none"></p>
                <p className="text22 mb-0 d-none"></p>
              </div>
            </Col>
          </Row>

          {provided.placeholder}
        </Row>
      )}
    </Draggable>
  );
}

export default DisplayWork2;
