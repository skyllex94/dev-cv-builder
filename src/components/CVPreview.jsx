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
  const Components = [Row1, Row2];

  const [onDrop, setOnDrop] = useState(Components);

  function handleOnDrop(result) {
    console.log(result);
    let items = onDrop;

    console.log(items);
    // const [reorderedItem] = items.splice(result.source.index, 1);
    // items.splice(result.destination.index, 0, reorderedItem);
    setOnDrop(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDrop}>
      <Droppable droppableId="sections" direction="vertical" type="row">
        {(provided) => (
          <div ref={ref}>
            <Row {...provided.droppableProps} ref={provided.innerRef}>
              {onDrop.map((Component, id, index) => (
                <Component key={id} id="1" index={1} />
              ))}

              {provided.placeholder}
            </Row>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});

export default CVPreview;
