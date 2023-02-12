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
import DisplayCertification from "./UIDisplaySections/DisplayCertification";

import { useLocation } from "react-router-dom";
import DisplayEmptySection from "./UIDisplaySections/DisplayEmptySection";

export const CVPreview = React.forwardRef((props, ref) => {
  // Template Variables
  const location = useLocation();
  let { template } = location.state;

  // If there isn't any template assigned, assign it to the default one
  if (!template) {
    template = "earth";
  }

  // Template "Venus" Component Arrangement
  const venusComponentsLeft = [
    {
      id: "work",
      content: <DisplayWork />,
    },
    {
      id: "education",
      content: <DisplayEducation />,
    },
    {
      id: "certification",
      content: <DisplayCertification />,
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
    {
      id: "projects",
      content: <DisplayProjects />,
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
      id: "empty",
      content: <DisplayEmptySection />,
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
    {
      id: "certification",
      content: <DisplayCertification />,
    },
  ];

  const [tempVenus, setTempVenus] = useState(venusTemplate);

  const [tempEarth, setTempEarth] = useState({
    Group1: {
      sections: earthComponentArrangement,
    },
  });

  // Functions for storing the arrangement of the sections, but not currently used
  /*
  function loadData() {
    if (data === null) {
      return {
        Group1: {
          components,
          sections,
        },
      };
    } else {
      return fetchComponentFromLocalStorage(data);
    }
  }

  function fetchComponentFromLocalStorage(data) {
    data.map((curr, index) => {
      if (curr.id === components[index].id) {
        console.log("Continue");
      } else {
        rearrange(curr, index);
      }
    });
  }

  // Recursion unsuccessful tryout
  function rearrange(curr, index) {
    if (curr.id === components[index].id) {
      return;
    }
    const comps = [...components];
    const [pushItemDown] = comps.splice(index, 1);
    comps.splice(index + 1, 0, pushItemDown);
    rearrange(curr, index + 1);
  }

    const rearrangeArray = (elementToBeMoved) => {
    const { source, destination } = elementToBeMoved;
    const droppedItemId = tempEarth[source.droppableId];

    const copiedItems = [...droppedItemId.components];
    const copiedItemNames = [...droppedItemId.sections];

    const [itemBeingRearranged] = copiedItems.splice(source.index, 1);
    const [namesBeingRearranged] = copiedItemNames.splice(source.index, 1);

    copiedItems.splice(destination.index, 0, itemBeingRearranged);
    copiedItemNames.splice(destination.index, 0, namesBeingRearranged);

    setTempEarth({
      Group1: {
        components: copiedItems,
        sections: copiedItemNames,
      },
    });
    updateColumnArrangementInLocalStorage(copiedItemNames);
  };

  const populateSections = (objKeyName) =>
    objKeyName.components.map((curr, index) => {
      const sectionName = sections[index];
      return (
        <Draggable
          draggableId={sectionName.id}
          key={sectionName.id}
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
      );
    });

      const updateColumnArrangementInLocalStorage = (copiedItemNames) => {
    window.localStorage.setItem("CVLayout", JSON.stringify(copiedItemNames));
  };
  */

  function handleOnDrag(result, columns, setColumns) {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      // Functionality for dropping items in a different column other than their own
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
      {Object.entries(tempEarth).map(([id, columns]) => {
        return (
          <Droppable
            droppableId={id}
            direction="vertical"
            key={columns}
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
                  {columns.sections.map((curr, index) => (
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
