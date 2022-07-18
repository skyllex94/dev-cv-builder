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

function DisplayWork(props) {
  return (
    <Draggable draggableId="3" key="3" index={3}>
      {(provided) => (
        <Row
          className="workSec ps-5 pt-2"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Row className={"workField" + (props.index - 1)}>
            <Col md={12}>
              <div className="section-titles"></div>
              <HorizontalLine />
            </Col>
            <Col md={12} className="d-flex">
              <Form.Label className={"textCompany" + (props.index - 1)}></Form.Label>
            </Col>
            <Col md={12} className={"work-position" + (props.index - 1)}>
              <div className={"me-2 textWorkPosition" + (props.index - 1)} />
              <div className={"d-none work-period" + (props.index - 1)}>
                <Col className="d-flex">
                  | <div className={"ms-2 me-1 textWorkStartDate" + (props.index - 1)} /> -
                  <div className={"me-2 ms-1 textWorkEndDate" + (props.index - 1)} />
                  <Col className={"d-flex work-location-group" + (props.index - 1)}>
                    | <div className={"ms-2 textWorkLocation" + (props.index - 1)} />
                    <div className={"ms-2 textWorkLocation" + (props.index - 1)} />
                    <div className={"ms-2 textWorkLocation" + (props.index - 1)} />
                  </Col>
                </Col>
              </div>
            </Col>

            <Col xs={12} className={"work-responsibilities" + (props.index - 1)}>
              <div className={"textResponsibilities" + (props.index - 1)}></div>
            </Col>
          </Row>

          {provided.placeholder}
        </Row>
      )}
    </Draggable>
  );
}

export default DisplayWork;
