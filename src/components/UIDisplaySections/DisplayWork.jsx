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

function DisplayWork() {
  const { numOfJobs, name } = useContext(Context);
  const [dragNDrop, setDragNDrop] = useState([]);

  // In order to set the initial state, you need useEffect,
  // because you cannot fetch init state from a destructured prop/useContext
  useEffect(() => {
    setDragNDrop(numOfJobs);
  }, [numOfJobs]);

  return (
    <DragDropContext
      onDragEnd={(item) => handleDragNDrop(item, dragNDrop, setDragNDrop)}
    >
      <Row className="workSection justify-content-center">
        <div className="section-titles-work pt-3">
          {name.work ? name.work : "Work Experience"}
          <HorizontalLine />
        </div>

        <Droppable droppableId="workSection" direction="vertical" type="row">
          {(provided) => (
            <Row
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="workSection"
            >
              {dragNDrop.map((job, index) => (
                <Draggable
                  draggableId={`item${index}`}
                  key={index}
                  index={index}
                >
                  {(provided) => (
                    <Row
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <div
                        key={index}
                        className={"pt-2 ps-0 workField" + index}
                        id="workField"
                      >
                        <Col md={12} className="d-flex">
                          <Form.Label className={"textCompany" + index}>
                            {job.company}
                          </Form.Label>
                        </Col>
                        <Col className="col-auto work-position d-flex">
                          <div className={"me-2 textWorkPosition" + index}>
                            {job.position}
                          </div>
                          <div className={"d-flex work-period" + index}>
                            {job.currentJob
                              ? formatDate(job.startDate, "Present")
                              : formatDate(job.startDate, job.endDate)}
                          </div>
                          <Col className={"d-flex work-location-group" + index}>
                            <div className={"ms-2 textWorkLocation" + index}>
                              {job.location}
                            </div>
                          </Col>
                        </Col>
                        <Col xs={12} className={"work-resp" + index}>
                          {job.resp !== undefined
                            ? job.resp.map((res, index) => {
                                return (
                                  <div
                                    key={index}
                                    className={"textResponsibilities" + index}
                                  >
                                    {res.message}
                                  </div>
                                );
                              })
                            : null}
                        </Col>
                      </div>
                    </Row>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Row>
          )}
        </Droppable>
      </Row>
    </DragDropContext>
  );
}

export default DisplayWork;
