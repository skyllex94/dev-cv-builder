import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { Draggable } from "react-beautiful-dnd";
import { HorizontalLine } from "./DisplayWork";

function DisplayLanguages() {
  return (
    <Draggable draggableId="8" key="8" index={8}>
      {(provided) => (
        <Row
          className="languages ps-5 pt-3"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Row className="languagesField">
            <Col md={12}>
              <div className="section-titles">Languages</div>
              <HorizontalLine />
            </Col>

            <Col md={12}>
              <Row className="languagesGroup"></Row>
            </Col>
          </Row>
          {provided.placeholder}
        </Row>
      )}
    </Draggable>
  );
}

export default DisplayLanguages;
