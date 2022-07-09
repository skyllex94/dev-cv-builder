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

function DisplayWork() {
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
                <Col className="d-flex">
                  | <div className="textWorkStartDate ms-2 me-1" /> -
                  <div className="textWorkEndDate ms-1" />
                </Col>
              </div>
            </Col>
            <Col md={12} className="work-location-group d-flex">
              <div className="textWorkLocation" />
              <div className="textWorkLocation me-2" />
              <div className="textWorkLocation me-2" />
            </Col>
            <Col md={12} className="work-responsibilities d-flex">
              <div className="textResponsibilities">
                <Parser />
              </div>
            </Col>
          </Row>

          {provided.placeholder}
        </Row>
      )}
    </Draggable>
  );
}

const Parser = () => {
  return (
    <ul>
      <p>lksddsfsdghf</p>
      <p>lksdhsdfgsdfgf32</p>
    </ul>
  );
};

export default DisplayWork;
