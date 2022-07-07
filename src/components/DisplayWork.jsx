import React from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";

import { Draggable } from "react-beautiful-dnd";

function DisplayWork() {
  return (
    <Draggable draggableId="3" key="3" index={3}>
      {(provided) => (
        <Row
          className="summary ps-5 pt-4"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Col md={12} className="workField d-flex">
            <Form.Label className="textCompany"></Form.Label>
          </Col>
          {provided.placeholder}
        </Row>
      )}
    </Draggable>
  );
}

export default DisplayWork;
