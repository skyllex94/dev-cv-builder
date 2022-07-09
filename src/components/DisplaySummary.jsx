import React from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";

import { Draggable } from "react-beautiful-dnd";

function DisplaySummary() {
  return (
    <Draggable draggableId="2" key="2" index={2}>
      {(provided) => (
        <Row
          className="summary ps-5 pt-4"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Col md={12} className="summaryField d-flex">
            <Form.Label className="textSummary"></Form.Label>
          </Col>
          {provided.placeholder}
        </Row>
      )}
    </Draggable>
  );
}

export default DisplaySummary;
