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
          className={"d-none ps-5 pt-3 workSec" + (props.index - 1)}
          id="workSection"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Row className={"workField" + (props.index - 1)}>
            {props.index - 1 === 1 ? (
              <Col md={12}>
                <div className="section-titles">Work Experience</div>
                <HorizontalLine />
              </Col>
            ) : null}

            <Col md={12} className="d-flex">
              <Form.Label
                className={"textCompany" + (props.index - 1)}
              ></Form.Label>
            </Col>

            <Col className="col-auto work-position d-flex">
              <div className={"me-2 textWorkPosition" + (props.index - 1)} />
              <div className={"d-none d-flex work-period" + (props.index - 1)}>
                |{" "}
                <div
                  className={"ms-2 me-1 textWorkStartDate" + (props.index - 1)}
                />
                <div
                  className={"me-2 ms-1 textWorkEndDate" + (props.index - 1)}
                />
              </div>
              <Col
                className={
                  "d-flex d-none work-location-group" + (props.index - 1)
                }
              >
                |
                <div className={"ms-2 textWorkLocation" + (props.index - 1)} />
                <div className={"ms-2 textWorkLocation" + (props.index - 1)} />
                <div className={"ms-2 textWorkLocation" + (props.index - 1)} />
              </Col>
            </Col>

            <Col
              xs={12}
              className={"work-responsibilities" + (props.index - 1)}
            >
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
