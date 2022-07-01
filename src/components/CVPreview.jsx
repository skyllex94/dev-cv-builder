import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Form from "react-bootstrap/Form";
import { GrLocation } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineLink, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Row1 from "./Row1";
import Row2 from "./Row2";

export const CVPreview = React.forwardRef((props, ref) => {
  const sections = [
    {
      id: "1",
      index: 1,
    },
    {
      id: "2",
      index: 2,
    },
  ];

  const content = [
    <Row1 id={sections[0].id} index={sections[0].index} />,
    <Row2 id={sections[1].id} index={sections[1].index} />,
  ];

  const [onDrop, setOnDrop] = useState(sections);

  function handleOnDrop(result) {
    console.log(result);
    const items = Array.from(onDrop);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setOnDrop(items);
  }

  return (
    <div ref={ref}>
      <DragDropContext onDragEnd={handleOnDrop}>
        <Droppable droppableId="sections" direction="vertical" type="column">
          {(provided) => (
            <Row {...provided.droppableProps} ref={provided.innerRef}>
              {sections.map((id, index) => {
                return (
                  <>
                    console.log({id})
                    <Draggable
                      key={id.toString()}
                      draggableId={id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <Row
                          className="general-info-section ps-5"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <Col className="name col-12 d-flex pt-2 d-none">
                            <Form className="pt-4 ">
                              <Form.Label className="textName"></Form.Label>
                            </Form>
                          </Col>
                          <Col className="position col-12 d-flex d-none">
                            <Form>
                              <Form.Label className="textPosition"></Form.Label>
                            </Form>
                          </Col>
                          <Col className="col-5">
                            <Row>
                              <Col className="address col-12 d-flex d-none">
                                <Form>
                                  <GrLocation />
                                  <Form.Label className="ms-1 mb-0 textAddress"></Form.Label>
                                </Form>
                              </Col>
                              <Col className="email col-12 d-flex d-none">
                                <Form>
                                  <BiMailSend />
                                  <Form.Label className="ms-1 mb-0 textEmail"></Form.Label>
                                </Form>
                              </Col>
                              <Col className="phone col-12 d-flex d-none">
                                <Form>
                                  <FiPhone />
                                  <Form.Label className="ms-1 mb-0 textPhone"></Form.Label>
                                </Form>
                              </Col>
                            </Row>
                          </Col>
                          <Col className="col-7">
                            <Row>
                              <Col className="website col-12 d-flex d-none">
                                <Form>
                                  <AiOutlineLink />
                                  <Form.Label className="ms-1 mb-0 textWebsite"></Form.Label>
                                </Form>
                              </Col>
                              <Col className="github col-12 d-flex d-none">
                                <Form>
                                  <AiFillGithub />
                                  <Form.Label className="ms-1 mb-0 textGithub"></Form.Label>
                                </Form>
                              </Col>
                              <Col className="linkedin col-12 d-flex d-none">
                                <Form>
                                  <AiFillLinkedin />
                                  <Form.Label className="ms-1 mb-0 textLinkedin"></Form.Label>
                                </Form>
                              </Col>
                            </Row>
                          </Col>
                          {provided.placeholder}
                        </Row>
                      )}
                    </Draggable>
                    <Row2 id={id} index={index} />
                  </>
                );
              })}

              {provided.placeholder}
            </Row>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});

export default CVPreview;
