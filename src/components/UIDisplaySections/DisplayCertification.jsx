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

function DisplayCertification() {
  // Imported from the passed data from the modals in a array of objects' structure
  const { certification, name } = useContext(Context);
  const [dragNDrop, setDragNDrop] = useState([]);

  // In order to set the initial state, you need useEffect,
  // because you cannot fetch init state from a destructured prop/useContext
  useEffect(() => {
    setDragNDrop(certification);
  }, [certification]);

  return (
    <DragDropContext
      onDragEnd={(item) => handleDragNDrop(item, dragNDrop, setDragNDrop)}
    >
      <Row className="certificationSection pt-3">
        <div className="section-titles-certification">
          {name.certification ? name.certification : "Certification & Licenses"}
          <HorizontalLine />
        </div>

        <Droppable
          droppableId="certificationSection"
          direction="vertical"
          type="row"
        >
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="certificationSection mb-2"
            >
              {dragNDrop.map((curr, index) => (
                <Draggable
                  draggableId={`item${index}`}
                  key={index}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Col className="col-auto d-flex">
                        <Form.Label className="textStudyField">
                          {curr.certification}
                        </Form.Label>
                      </Col>

                      <Row className="edu-university">
                        <Col className="col-auto pe-2">{curr.issuedBy}</Col>
                        <Col className="col-auto px-0">
                          {formatDate(curr.startDate, curr.endDate, true)}
                        </Col>
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
                    </div>
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

export default DisplayCertification;
