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

function DisplayEducation() {
  return (
    <Draggable draggableId="7" key="7" index={7}>
      {(provided) => (
        <Row
          className="educationSec ps-5 pt-2"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Row className="educationField">
            <Col md={12}>
              <div className="section-titles">Education</div>
              <HorizontalLine />
            </Col>
            <Col md={12} className="d-flex">
              <Form.Label className="textStudyField"></Form.Label>
            </Col>
            <Col md={12} className="edu-university d-flex">
              <div className="textUniversity me-2" />
              <div className="edu-period d-none">
                <Col className="d-flex ">
                  | <div className="textEduStartDate ms-2 me-1" /> -
                  <div className="textEduEndDate me-2 ms-1" />
                  <Col className="edu-location-group d-flex">
                    | <div className="textEduLocation ms-2" />
                    <div className="textEduLocation me-2" />
                    <div className="textEduLocation me-2" />
                  </Col>
                </Col>
              </div>
            </Col>

            <Col md={12} className="edu-accomplish d-flex">
              <div className="textAccomplish"></div>
            </Col>
          </Row>

          {provided.placeholder}
        </Row>
      )}
    </Draggable>
  );
}

export default DisplayEducation;
