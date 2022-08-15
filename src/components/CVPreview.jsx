import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DisplayGenInfo from "./DisplayGenInfo";
import DisplaySummary from "./DisplaySummary";
import DisplayWork from "./DisplayWork";
import DisplaySkills from "./DisplaySkills";
import DisplayEducation from "./DisplayEducation";
import DisplayLanguages from "./DisplayLanguages";
import DisplayProjects from "./DisplayProjects";

import { useLocation } from "react-router-dom";
import { BiCopy } from "react-icons/bi";

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

  const itemsLeftColumn = [
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
  ];
  const itemsRightColumn = [
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

  const sectionVenusTemplate = {
    Group1: {
      sections: itemsLeftColumn,
    },
    Group2: {
      sections: itemsRightColumn,
    },
  };

  const [columns, setColumns] = useState(sectionVenusTemplate);

  const location = useLocation();
  const { template } = location.state;

  const [onDrop, setOnDrop] = useState(sections);

  function handleOnDrag(result, columns, setColumns) {
    // if (!result.destination) return;
    // let items = onDrop; // perhaps you want it to be const
    // console.log(result);
    // const [reorderedItem] = items.splice(result.source.index, 1);
    // items.splice(result.destination.index, 0, reorderedItem);
    // setOnDrop(items);
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.sections];
      const destItems = [...destColumn.sections];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          sections: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          sections: destItems,
        },
      });
    } else {
      console.log(result);
      const column = columns[source.droppableId];
      const copiedItems = [...column.sections];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          sections: copiedItems,
        },
      });
    }
  }

  return template === "earth" ? (
    <DragDropContext onDragEnd={handleOnDrag}>
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
  ) : (
    <DragDropContext
      onDragEnd={(result) => handleOnDrag(result, columns, setColumns)}
    >
      {Object.entries(columns).map(([id, column]) => {
        return (
          <Droppable
            droppableId={id}
            key={id}
            direction="vertical"
            type="column"
          >
            {(provided) => (
              <div ref={ref}>
                <Row>
                  {id === "Group1" ? (
                    <Col
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="ps-5 col-6"
                      // style={{
                      //   width: 650,
                      // }}
                    >
                      {column.sections.map((curr, index) => (
                        <Draggable
                          draggableId={curr.id}
                          key={curr.id}
                          index={index}
                        >
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
                    </Col>
                  ) : (
                    <Col
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="ps-5 col-6"
                    >
                      {column.sections.map((curr, index) => (
                        <Draggable
                          draggableId={curr.id}
                          key={curr.id}
                          index={index}
                        >
                          {(provided) => (
                            <Row
                              className={+curr.id}
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
                    </Col>
                  )}
                </Row>
              </div>
            )}
          </Droppable>
        );
      })}
    </DragDropContext>
  );
});

export default CVPreview;
