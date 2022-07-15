import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { Draggable } from "react-beautiful-dnd";
import { HorizontalLine } from "./DisplayWork";

function DisplaySkills() {
  return (
    <Draggable draggableId="6" key="6" index={6}>
      {(provided) => (
        <Row
          className="skills ps-5 "
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Row className="skillsField">
            <Col md={12}>
              <div className="section-titles">Skills</div>
              <HorizontalLine />
            </Col>

            <Col md={12}>
              <Row className="skillsGroup"></Row>
            </Col>
          </Row>
          {provided.placeholder}
        </Row>
      )}
    </Draggable>
  );
}

export default DisplaySkills;
