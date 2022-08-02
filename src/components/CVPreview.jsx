import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DisplayGenInfo from "./DisplayGenInfo";
import DisplaySummary from "./DisplaySummary";
import DisplayWork from "./DisplayWork";
import DisplaySkills from "./DisplaySkills";
import DisplayEducation from "./DisplayEducation";
import DisplayLanguages from "./DisplayLanguages";
import DisplayProjects from "./DisplayProjects";

export const CVPreview = React.forwardRef((props, ref) => {
  const sections = [
    {
      id: "summary",
      content: <DisplaySummary />,
    },
    {
      id: "work",
      content: <DisplayWork />,
    },
    {
      id: "skills",
      content: <DisplaySkills />,
    },
    {
      id: "education",
      content: <DisplayEducation />,
    },
    {
      id: "languages",
      content: <DisplayLanguages />,
    },
    {
      id: "projects",
      content: <DisplayProjects />,
    },
  ];

  const [onDrop, setOnDrop] = useState(sections);

  function handleOnDrop(result) {
    if (!result.destination) return;
    let items = onDrop;
    console.log(result);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setOnDrop(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDrop}>
      <Droppable droppableId="sections" direction="vertical" type="row">
        {(provided) => (
          <div ref={ref}>
            <Row
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="ps-5"
            >
              <DisplayGenInfo name="general-info" />
              {onDrop.map((curr, index) => (
                <Draggable draggableId={curr.id} key={curr.id} index={index}>
                  {(provided) => (
                    <Row
                      className={curr.id}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {curr.content}
                    </Row>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Row>
          </div>
        )}
      </Droppable>
      <div className="mb-5" />
    </DragDropContext>
  );
});

export default CVPreview;
