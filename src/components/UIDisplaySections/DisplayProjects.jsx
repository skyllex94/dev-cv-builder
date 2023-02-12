import React, { useContext, useState, useEffect } from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/Nav";
import { HorizontalLine } from "../../utils/Utils";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import Context from "../../context/Context";
import {
  formatDate,
  handleDragNDrop,
  displayElements,
} from "../UIDisplaySections/DisplayFunctions";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function DisplayProjects() {
  // Array with all the values inputted from the modal, a modal is a single object with all the info
  const { numOfProjects, name } = useContext(Context);
  const [dragNDrop, setDragNDrop] = useState([]);

  // In order to set the initial state, you need useEffect,
  // because you cannot fetch init state from a destructured prop/useContext
  useEffect(() => {
    setDragNDrop(numOfProjects);
  }, [numOfProjects]);

  return (
    <DragDropContext
      onDragEnd={(item) => handleDragNDrop(item, dragNDrop, setDragNDrop)}
    >
      <Row className="projectSection justify-content-center">
        <div className="section-titles-projects mt-3">
          {name.projects ? name.projects : "Personal Projects"}
          <HorizontalLine />
        </div>

        <Droppable droppableId="projectSection" direction="vertical" type="row">
          {(provided) => (
            <Row
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="projectSection" // mb-2
            >
              {dragNDrop.map((project, index) => (
                <Draggable
                  draggableId={`item${index}`}
                  key={index}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className={index === 0 ? "ps-0" : "mt-2 ps-0"}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Row className="align-items-center">
                        <Col className="d-flex col-auto pe-0">
                          <Form.Label className="projectName mt-2">
                            {project.project}
                          </Form.Label>

                          <Col className="d-inline col-auto d-flex ">
                            {project.link !== "" && (
                              <Nav.Link
                                className={"d-flex align-items-center"}
                                href={project.link}
                              >
                                <FiExternalLink className="ms-2 me-1" />
                              </Nav.Link>
                            )}
                            {project.github !== "" && (
                              <Nav.Link
                                className={"d-flex align-items-center"}
                                href={project.github}
                              >
                                <AiFillGithub className="ms-2" />
                              </Nav.Link>
                            )}
                          </Col>
                        </Col>
                        <Col className="d-inline col-auto d-flex  project-period">
                          {formatDate(project.startDate, project.endDate, true)}
                        </Col>
                      </Row>

                      <Col className="col-12 verticalLine">
                        <Col className={"d-flex project-info"}>
                          <div className={"me-2 projectDesc"}>
                            {project.desc}
                          </div>
                        </Col>

                        <Row className={"techAlign"}>
                          <div className={"d-inline techTitle"}>
                            Technologies Used:
                            {displayElements(
                              project.techUsed,
                              "techUsedItem d-inline mx-2"
                            )}
                          </div>
                        </Row>

                        <Row>
                          {displayElements(
                            project.highlights,
                            "d-inline project-accomplish"
                          )}
                        </Row>
                      </Col>
                    </div>
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

export default DisplayProjects;
