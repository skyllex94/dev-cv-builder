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
      key: "key1",
      index: 1,
    },
    {
      id: "2",
      key: "key2",
      index: 2,
    },
  ];

  const content = [
    <Row1 id={sections[0].id} index={sections[0].index} />,
    <Row2 id={sections[1].id} index={sections[1].index} />,
  ];

  const [onDrop, setOnDrop] = useState(content);

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
              {content.map((id, index) => {
                return { content };
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
