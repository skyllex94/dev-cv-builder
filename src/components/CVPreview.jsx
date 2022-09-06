import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DisplayGenInfo from "./UIDisplaySections/DisplayGenInfo";
import DisplaySummary from "./UIDisplaySections/DisplaySummary";
import DisplayWork from "./UIDisplaySections/DisplayWork";
import DisplaySkills from "./UIDisplaySections/DisplaySkills";
import DisplayEducation from "./UIDisplaySections/DisplayEducation";
import DisplayLanguages from "./UIDisplaySections/DisplayLanguages";
import DisplayProjects from "./UIDisplaySections/DisplayProjects";
import DisplayContact from "./UIDisplaySections/DisplayContact";

import { useLocation } from "react-router-dom";

export const CVPreview = React.forwardRef((props, ref) => {
  // Template Variables
  const location = useLocation();
  const { template } = location.state;

  // Template "Venus" Component Arrangement
  const venusComponentsLeft = [
    {
      id: "work",
      content: <DisplayWork />,
    },
    {
      id: "projects",
      content: <DisplayProjects />,
    },
    {
      id: "education",
      content: <DisplayEducation />,
    },
  ];
  const venusComponentsRight = [
    {
      id: "contact",
      content: <DisplayContact />,
    },
    {
      id: "languages",
      content: <DisplayLanguages />,
    },
    {
      id: "skills",
      content: <DisplaySkills />,
    },
  ];

  const venusTemplate = {
    Group1: {
      sections: venusComponentsLeft,
    },
    Group2: {
      sections: venusComponentsRight,
    },
  };
  // Template "Earth" Component Arrangement
  const earthComponentArrangement = [
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

  const earthTemplate = {
    Group1: {
      sections: earthComponentArrangement,
    },
  };

  const [tempVenus, setTempVenus] = useState(venusTemplate);
  const [tempEarth, setTempEarth] = useState(earthTemplate);

  function handleOnDrag(result, columns, setColumns) {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      // const sourceColumn = columns[source.droppableId];
      // const destColumn = columns[destination.droppableId];
      // const sourceItems = [...sourceColumn.sections];
      // const destItems = [...destColumn.sections];
      // const [removed] = sourceItems.splice(source.index, 1);
      // destItems.splice(destination.index, 0, removed);
      // setColumns({
      //   ...columns,
      //   [source.droppableId]: {
      //     ...sourceColumn,
      //     sections: sourceItems,
      //   },
      //   [destination.droppableId]: {
      //     ...destColumn,
      //     sections: destItems,
      //   },
      // });
      return;
    } else {
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
    <DragDropContext
      onDragEnd={(result) => handleOnDrag(result, tempEarth, setTempEarth)}
    >
      {Object.entries(tempEarth).map(([key, value]) => {
        return (
          <Droppable
            droppableId={key}
            direction="vertical"
            key={value}
            type="row"
          >
            {(provided) => (
              <div ref={ref}>
                <Row
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="ps-5"
                >
                  <DisplayGenInfo name="general-info" />
                  {value.sections.map((curr, index) => (
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
                </Row>
              </div>
            )}
          </Droppable>
        );
      })}
      <div className="mb-5" />
    </DragDropContext>
  ) : template === "venus" ? (
    <div ref={ref}>
      <div className="px-5 pb-4" style={{ backgroundColor: "#353A45" }}>
        <div>
          <DisplayGenInfo name="general-info" />
        </div>
        <DisplaySummary name="summary" />
      </div>
      <div className="d-flex align-items-start ps-5">
        <DragDropContext
          onDragEnd={(result) => handleOnDrag(result, tempVenus, setTempVenus)}
        >
          {Object.entries(tempVenus).map(([id, column]) => {
            return (
              <Droppable
                droppableId={id}
                key={id}
                direction="vertical"
                type="column"
              >
                {(provided) => (
                  <>
                    {id === "Group1" ? (
                      <Row
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          width: 570,
                        }}
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
                      </Row>
                    ) : (
                      <Row
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          width: 270,
                        }}
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
                      </Row>
                    )}
                  </>
                )}
              </Droppable>
            );
          })}
        </DragDropContext>
      </div>
      <div className="mb-5" />
    </div>
  ) : null;
});

export default CVPreview;
