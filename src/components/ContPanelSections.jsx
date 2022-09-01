import { Switch } from "antd";
import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDriveFileRenameOutline } from "react-icons/md";
import "../index.css";

import SummarySection from "./ContPanelSections/SummarySection";
import WorkSection from "./ContPanelSections/WorkSection";

import ModalEducation from "./ModalEducation";
import ModalInfoContent from "./ModalGenInfo";
import ModalLanguages from "./ModalLanguages";
import ModalProjects from "./ModalProjects";
import ModalSkills from "./ModalSkills";
import ModalSummary from "./ModalSummary";
import ModalWork from "./ModalWork";
import SkillsSection from "./ContPanelSections/SkillsSection";
import EducationSection from "./ContPanelSections/EducationSection";
import LanguagesSection from "./ContPanelSections/LanguagesSection";
import ProjectsSection from "./ContPanelSections/ProjectsSection";

function ContPanelSections() {
  const [modalGenInfo, setModalGenInfo] = useState(false);
  const [modalSummary, setModalSummary] = useState(false);

  // Work states each on for generating a state for a modal to fill-in the data for the specific job
  const [modalWork0, setModalWork0] = useState(false);
  const [modalWork1, setModalWork1] = useState(false);
  const [modalWork2, setModalWork2] = useState(false);
  const [modalWork3, setModalWork3] = useState(false);
  const [modalWork4, setModalWork4] = useState(false);
  // Project states each on for generating a state for a modal to fill-in the data for the specific job
  const [modalPrj0, setModalPrj0] = useState(false);
  const [modalPrj1, setModalPrj1] = useState(false);
  const [modalPrj2, setModalPrj2] = useState(false);
  const [modalPrj3, setModalPrj3] = useState(false);
  const [modalPrj4, setModalPrj4] = useState(false);

  let modalsWork = [modalWork0, modalWork1, modalWork2, modalWork3, modalWork4];
  let modalsProject = [modalPrj0, modalPrj1, modalPrj2, modalPrj3, modalPrj4];
  let allSetModalsWork = [
    setModalWork0,
    setModalWork1,
    setModalWork2,
    setModalWork3,
    setModalWork4,
  ];
  let allSetModalsProject = [
    setModalPrj0,
    setModalPrj1,
    setModalPrj2,
    setModalPrj3,
    setModalPrj4,
  ];

  const [modalSkills, setModalSkills] = useState(false);
  const [modalEducation, setModalEducation] = useState(false);
  const [modalLanguages, setModalLanguages] = useState(false);
  const [modalProjects, setModalProjects] = useState(false);
  const UIClassesForDisplayProjects = [
    ".projectName",
    ".projectDesc",
    ".projectStartDate",
    ".projectEndDate",
    ".projectAccomplishments",
  ];

  const [showSkills, setShowSkills] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showLanguages, setShowLanguages] = useState(true);
  const [showProjects, setShowProjects] = useState(true);

  const [workSections, setWorkSections] = useState([{ name: "Job 1" }]);
  const [projectsSections, setProjectsSections] = useState([
    { name: "Project 1" },
  ]);

  // On and Off State switch when toggling switch button for each section
  const ToggleSwitchButton = (state, setState) => {
    state ? setState(false) : setState(true);
  };

  const toggleCurrModal = (showState, UIClassName) => {
    const modal = document.querySelector("." + UIClassName);
    if (modal === null) {
      return;
    }
    if (showState) {
      modal.classList.remove("d-none");
    } else {
      modal.classList.add("d-none");
    }
  };

  // Adding additional job field - maximum of 5
  const handleAddField = (index, nameTag, sections, setSections) => {
    if (sections.length < 5) {
      const values = [...sections, { name: nameTag + (sections.length + 1) }];
      setSections(values);
    }
  };

  // Removing selected job field based on the index of the job
  const handleRemoveField = (index, sectionName, sections, setSection) => {
    // Check if the item being removed is the last one and skip if there is only 1 item left
    if (sections.length > 1 && sections.length === index + 1) {
      const values = [...sections];
      const displaySection = document.querySelector(sectionName + (index + 1));
      displaySection.classList.add("d-none");
      values.splice(index, 1);
      setSection(values);
    }
    return;
  };

  const showModals = (index, modalsToAdjustState) => {
    modalsToAdjustState.map((modal, indexModal) => {
      if (index === indexModal) {
        modal(true);
      }
    });
  };

  // Renaming states and functions

  const [renameWork, setRenameWork] = useState({
    value: "Work Experience",
    isInEditMode: false,
  });
  const [renameSkills, setRenameSkills] = useState({
    value: "Skills",
    isInEditMode: false,
  });
  const [renameEducation, setRenameEducation] = useState({
    value: "Education",
    isInEditMode: false,
  });
  const [renameLanguages, setRenameLanguages] = useState({
    value: "Languages",
    isInEditMode: false,
  });
  const [renameProjects, setRenameProjects] = useState({
    value: "Personal Projects",
    isInEditMode: false,
  });

  const toggleRenameMode = (state, setState) => {
    setState({ isInEditMode: !state.isInEditMode, value: state.value });
  };

  const renderEditView = (value, setValue, UIClassName) => {
    return (
      <Col className="d-flex d-inline">
        <Form.Control
          type="text"
          defaultValue={value}
          autoFocus
          onChange={(event) =>
            setValue({ isInEditMode: true, value: event.target.value })
          }
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              updateRenameValue(value, setValue, UIClassName);
            }
          }}
        />
        <Button
          variant="success"
          onClick={() => updateRenameValue(value, setValue, UIClassName)}
        >
          ✓
        </Button>
      </Col>
    );
  };

  const updateRenameValue = (value, setValue, UIClassName) => {
    setValue({ isInEditMode: false, value: value });
    document.querySelector(UIClassName).textContent = value;
  };

  return (
    <>
      <div className="d-grid gap-2 ms-2 cont-panel-items-styling">
        <Row>
          <Col md={10} className="d-flex justify-content-start">
            <Form.Label
              className="items-styling mt-2"
              type="text"
              onClick={() => setModalGenInfo(true)}
            >
              General Information
            </Form.Label>
          </Col>
        </Row>
        <SummarySection />

        <Row>
          <Card>
            <WorkSection />

            <Col>
              {workSections.map((section, index) => {
                return (
                  <div key={index}>
                    <Row className="mb-2">
                      <Col md={6} className="d-flex justify-content-start">
                        <Form.Label
                          className="items-styling my-2 ms-4"
                          onClick={() => showModals(index, allSetModalsWork)}
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
                              "Job ",
                              workSections,
                              setWorkSections
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
                              ".workField",
                              workSections,
                              setWorkSections
                            )
                          }
                        >
                          <AiOutlineMinus />
                        </Form.Label>
                      </Col>
                    </Row>
                    <ModalWork
                      show={modalsWork[index]}
                      onHide={() => allSetModalsWork[index](false)}
                      jobcount={index}
                    />
                  </div>
                );
              })}
            </Col>
          </Card>
        </Row>

        <SkillsSection />

        <EducationSection />

        <LanguagesSection />

        <Row>
          <ProjectsSection />
        </Row>
      </div>

      <ModalInfoContent
        show={modalGenInfo}
        onHide={() => setModalGenInfo(false)}
      />
      <ModalSummary show={modalSummary} onHide={() => setModalSummary(false)} />

      <ModalSkills show={modalSkills} onHide={() => setModalSkills(false)} />
      <ModalEducation
        show={modalEducation}
        onHide={() => setModalEducation(false)}
      />
      <ModalLanguages
        show={modalLanguages}
        onHide={() => setModalLanguages(false)}
      />
      <ModalProjects
        show={modalProjects}
        onHide={() => setModalProjects(false)}
        uiclasses={UIClassesForDisplayProjects}
      />
    </>
  );
}

export default ContPanelSections;
