import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

import Popover from "react-bootstrap/esm/Popover";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import {
  ToggleSwitchButton,
  toggleCurrModal,
  toggleRenameMode,
  renderEditView,
  showModals,
  handleAddField,
  handleRemoveField,
} from "./ContPanelFunctions";
import ModalProjects from "../ModalProjects";

export default function ProjectsSection() {
  // Show modal state
  const [showProjects, setShowProjects] = useState(true);
  // Rename section title state
  const [renameProjects, setRenameProjects] = useState({
    value: "Personal Projects",
    isInEditMode: false,
  });

  const [modalProjects, setModalProjects] = useState(false);

  const [projectsSections, setProjectsSections] = useState([
    { name: "Project 1" },
  ]);

  // Project states each on for generating a state for a modal to fill-in the data for the specific job
  const [modalPrj0, setModalPrj0] = useState(false);
  const [modalPrj1, setModalPrj1] = useState(false);
  const [modalPrj2, setModalPrj2] = useState(false);
  const [modalPrj3, setModalPrj3] = useState(false);
  const [modalPrj4, setModalPrj4] = useState(false);

  let modalsProject = [modalPrj0, modalPrj1, modalPrj2, modalPrj3, modalPrj4];
  let allSetModalsProject = [
    setModalPrj0,
    setModalPrj1,
    setModalPrj2,
    setModalPrj3,
    setModalPrj4,
  ];

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
          {projectsSections.map((section, index) => {
            return (
              <div key={index}>
                <Row className="mb-2">
                  <Col md={6} className="d-flex justify-content-start">
                    <Form.Label
                      className="items-styling my-2 ms-4"
                      onClick={() => showModals(index, allSetModalsProject)}
                    >
                      {section.name}
                    </Form.Label>
                  </Col>

                  <Col md={6} className="d-flex justify-content-end">
                    <Form.Label
                      className="items-styling mt-2 me-3"
                      onClick={() =>
                        handleAddField(
                          index,
                          "Projects ",
                          projectsSections,
                          setProjectsSections
                        )
                      }
                    >
                      <AiOutlinePlus />
                    </Form.Label>
                    <Form.Label
                      className="items-styling mt-2 me-3"
                      onClick={() =>
                        handleRemoveField(
                          index,
                          ".projectField",
                          projectsSections,
                          setProjectsSections
                        )
                      }
                    >
                      <AiOutlineMinus />
                    </Form.Label>
                  </Col>
                </Row>
                <ModalProjects
                  show={modalsProject[index]}
                  onHide={() => allSetModalsProject[index](false)}
                  projectcount={index}
                />
              </div>
            );
          })}
        </Col>

        {/*<ModalProjects
        show={modalProjects}
        onHide={() => setModalProjects(false)}
        uiclasses={UIClassesForDisplayProjects}
      /> */}

        {/* A JSX comment */}
      </Card>
    </Row>
  );
}
