import React, { useContext, useState, useEffect } from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";
import { HorizontalLine } from "../../utils/Utils";
import Context from "../../context/Context";
import {
  formatDate,
  handleDragNDrop,
} from "../UIDisplaySections/DisplayFunctions";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function DisplayEducation() {
  // Imported from Context, passed data from the modals in a array of objects' structure
  const { education, name } = useContext(Context);
  const [dragNDrop, setDragNDrop] = useState([]);

  // In order to set the initial state, you need useEffect,
  // because you cannot fetch init state from a destructured prop/useContext
  useEffect(() => {
    setDragNDrop(education);
  }, [education]);

  return (
    <DragDropContext
      onDragEnd={(item) => handleDragNDrop(item, dragNDrop, setDragNDrop)}
    >
      <Row className="educationSection pt-3">
        <Col md={12}>
          <div className="section-titles-education">
            {name.education ? name.education : "Education"}
          </div>
          <HorizontalLine />
        </Col>

        <Droppable
          droppableId="educationSection"
          direction="vertical"
          type="row"
        >
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="educationSection"
            >
              {dragNDrop.map((curr, index) => (
                <Draggable
                  draggableId={`item${index}`}
                  key={index}
                  index={index}
                >
                  {(provided) => (
                    <Row
                      className={index === 0 ? "ps-0" : "mt-2 ps-0"}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Col className="col-auto d-flex">
                        <Form.Label className="textStudyField">
                          {curr.degree}
                        </Form.Label>
                      </Col>

                      <Row className="edu-university">
                        <Col className="col-auto pe-0">{curr.university}</Col>
                        <Col className="col-auto">
                          {curr.ongoing
                            ? formatDate(curr.startDate, "Present")
                            : formatDate(curr.startDate, curr.endDate)}
                        </Col>
                        <Col className="col-auto ps-0">{curr.location}</Col>
                      </Row>

                      <Col md={12} className="edu-accomplish">
                        {curr.accomplishments.map((acc, index) => {
                          return (
                            <div key={index} className="textAccomplish">
                              {acc.message}
                            </div>
                          );
                        })}
                      </Col>
                    </Row>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Row>
    </DragDropContext>
  );
}

export default DisplayEducation;
