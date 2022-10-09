import React, { useState, useContext, useEffect } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

import Popover from "react-bootstrap/esm/Popover";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ModalProjects from "../InputModals/ModalProjects";
import Context from "../../context/Context";

import {
  ToggleSwitchButton,
  toggleCurrModal,
  toggleRenameMode,
  renderEditView,
  showModals,
} from "./ContPanelFunctions";

export default function ProjectsSection() {
  // Show modal state
  const [showProjects, setShowProjects] = useState(true);
  // Rename section title state
  const [renameProjects, setRenameProjects] = useState({
    value: "Personal Projects",
    isInEditMode: false,
  });
  // Fetch data from localStorage if any
  const data = JSON.parse(window.localStorage.getItem("Projects"));

  // Amount of modals each one being a different project
  const [modals, setModals] = useState([{ display: false }]);

  const { displayProjects } = useContext(Context);

  // Single values object used to start or add new values to the array
  const valuesForPopulating = {
    project: "Dev-CV-Builder",
    link: "https://dev-cv-builder.herokuapp.com",
    github: "https://github.com/skyllex94/dev-cv-builder",
    desc: "A React.js based Free CV builder.",
    techUsed: [
      {
        message: "Javascript",
      },
      {
        message: "React.js",
      },
    ],
    startDate: "2019-05-29",
    endDate: "2019-09-29",
    highlights: [
      {
        message: "- Improved skillset by 200% with this last project I did.",
      },
    ],
  };

  // Fetching values from localStorage if any there, if not default to insert one.
  const [values, setValues] = useState(dataRetrieval);

  // Populating values either from localStorage, or creating a single objects of values
  function dataRetrieval() {
    if (data !== null) {
      return data;
    } else {
      return [valuesForPopulating];
    }
  }

  // If there's local data, display the content of it as the page loads
  useEffect(() => {
    if (data !== null) {
      displayProjects(data);
    }
  }, []);

  // Match the amount of values objects there are with the modals amount on loading the page
  useEffect(() => {
    if (values.length !== modals.length) {
      setModals([...modals, { display: false }]);
    }
  }, [modals]);

  // Popover Options Dropdown Menu
  const popover = (
    <Popover style={{ padding: "15px" }}>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() => ToggleSwitchButton(showProjects, setShowProjects)}
        >
          Show/Hide Section
        </Form.Label>
      </Col>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() => toggleRenameMode(renameProjects, setRenameProjects)}
        >
          Rename Section Title
        </Form.Label>
      </Col>
    </Popover>
  );

  function hideOpenedModal(index) {
    const updatedModals = [...modals];
    updatedModals[index].display = false;
    setModals(updatedModals);
  }

  // Add additional job and update states and localStorage
  function addNewProject() {
    const updatedModals = [...modals, { job: false }];
    setModals(updatedModals);

    const updatedValues = [...values, valuesForPopulating];
    setValues(updatedValues);

    updateDisplayingValues(updatedValues);
  }

  // Remove selected last job from modals and values states, and localStorage
  function removeSelectedProject(index) {
    const updatedModals = [...modals];
    updatedModals.splice(index, 1);
    setModals(updatedModals);

    const updatedValues = [...values];
    updatedValues.splice(index, 1);
    setValues(updatedValues);

    updateDisplayingValues(updatedValues);
  }

  // Update values state, pass values to Context and update it in localStorage
  function updateDisplayingValues(values) {
    setValues(values);
    displayProjects(values);
    updateValuesInLocalStorage(values);
  }

  // Update the data set to include this current modal's  inputted values
  function updateValuesInLocalStorage(updatedValues) {
    window.localStorage.setItem("Projects", JSON.stringify(updatedValues));
  }

  return (
    // The whole section row as displayed in the Control Panel
    <Row>
      <Card>
        <Row className="my-3">
          <Col
            md={10}
            className="d-flex justify-content-start align-items-center"
          >
            <Form.Label className="cp-work-styling ms-2">
              {renameProjects.isInEditMode
                ? renderEditView(
                    renameProjects.value,
                    setRenameProjects,
                    ".section-titles-projects"
                  )
                : renameProjects.value}
            </Form.Label>
          </Col>
          <Col md={2} className="d-flex justify-content-end align-items-center">
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom-start"
              overlay={popover}
            >
              <Form.Label className="optionsStyle p-1">
                <FiMoreVertical />
              </Form.Label>
            </OverlayTrigger>
          </Col>

          {showProjects
            ? toggleCurrModal(showProjects, "projects")
            : toggleCurrModal(showProjects, "projects")}
        </Row>

        <Col>
          {modals.map((section, index) => {
            return (
              <div key={index}>
                <Row className="mb-2">
                  <Col md={6} className="d-flex justify-content-start">
                    <Form.Label
                      className="items-styling my-2 ms-4"
                      onClick={() => showModals(index, modals, setModals)}
                    >
                      Project {index + 1}
                    </Form.Label>
                  </Col>

                  <Col md={6} className="d-flex justify-content-end">
                    <Form.Label
                      className="items-styling mt-2 me-3"
                      onClick={() => addNewProject()}
                    >
                      <AiOutlinePlus />
                    </Form.Label>
                    <Form.Label
                      className="items-styling mt-2 me-3"
                      onClick={() => removeSelectedProject(index)}
                    >
                      <AiOutlineMinus />
                    </Form.Label>
                  </Col>
                </Row>
                <ModalProjects
                  show={modals[index].display}
                  onHide={() => hideOpenedModal(index)}
                  values={values}
                  setValues={setValues}
                  i={index}
                />
              </div>
            );
          })}
        </Col>
      </Card>
    </Row>
  );
}
