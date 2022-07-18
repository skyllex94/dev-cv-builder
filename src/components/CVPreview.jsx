import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";

import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DisplayGenInfo from "./DisplayGenInfo";
import DisplaySummary from "./DisplaySummary";
import DisplayWork from "./DisplayWork";
import DisplayWork2 from "./DisplayWork2";
import DisplayWork3 from "./DisplayWork3";
import DisplaySkills from "./DisplaySkills";
import DisplayEducation from "./DisplayEducation";
import DisplayLanguages from "./DisplayLanguages";

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
  const Components = [
    DisplayGenInfo,
    DisplaySummary,
    DisplayWork,
    DisplayWork,
    DisplayWork,
    DisplaySkills,
    DisplayEducation,
    DisplayLanguages,
  ];

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
              {onDrop.map((Component, id) => (
                <Component key={id} index={id}/>
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
