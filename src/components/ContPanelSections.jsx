import { Switch } from "antd";
import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDriveFileRenameOutline } from "react-icons/md";
import "../index.css";

import ModalEducation from "./ModalEducation";
import ModalInfoContent from "./ModalInfoContent";
import ModalLanguages from "./ModalLanguages";
import ModalProjects from "./ModalProjects";
import ModalSkills from "./ModalSkills";
import ModalSummary from "./ModalSummary";
import ModalWork from "./ModalWork";

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

  const [showGenInfo, setShowGenInfo] = useState(true);
  const [showSummary, setShowSummary] = useState(true);
  const [showWork, setShowWork] = useState(true);
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
          onChange={(event) =>
            setValue({ isInEditMode: true, value: event.target.value })
          }
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
      <div className="d-grid gap-2 ms-2">
        <Row>
          <Col md={10} className="d-flex justify-content-start">
            <Form.Label
              className="section-styling mt-2"
              type="text"
              onClick={() => setModalGenInfo(true)}
            >
              General Information
            </Form.Label>
          </Col>

          <Col md={2} className="d-flex mt-2 justify-content-end">
            <Switch
              defaultChecked
              onClick={() => ToggleSwitchButton(showGenInfo, setShowGenInfo)}
            />
            {showGenInfo
              ? toggleCurrModal(showGenInfo, "general-info")
              : toggleCurrModal(showGenInfo, "general-info")}
          </Col>
        </Row>

        <Row>
          <Col md={10} className="d-flex justify-content-start">
            <Form.Label
              className="section-styling mt-2"
              onClick={() => setModalSummary(true)}
            >
              Summary
            </Form.Label>
          </Col>
          <Col md={2} className="d-flex mt-2 justify-content-end">
            <Switch
              defaultChecked
              onClick={() => ToggleSwitchButton(showSummary, setShowSummary)}
            />
            {showSummary
              ? toggleCurrModal(showSummary, "summaryField")
              : toggleCurrModal(showSummary, "summaryField")}
          </Col>
        </Row>

        <Row>
          <Card>
            <Row className="my-3">
              <Col
                md={9}
                className="d-flex justify-content-start align-items-center"
              >
                <Form.Label className="cp-work-styling ms-2">
                  {renameWork.isInEditMode
                    ? renderEditView(
                        renameWork.value,
                        setRenameWork,
                        ".section-titles-work"
                      )
                    : renameWork.value}
                </Form.Label>
              </Col>
              <Col
                md={3}
                className="d-flex justify-content-end align-items-center"
              >
                <Form.Label
                  className="section-styling me-2"
                  onClick={() => toggleRenameMode(renameWork, setRenameWork)}
                >
                  <MdDriveFileRenameOutline />
                </Form.Label>
                <Switch
                  defaultChecked
                  onClick={() => ToggleSwitchButton(showWork, setShowWork)}
                />
                {showWork
                  ? toggleCurrModal(showWork, "work")
                  : toggleCurrModal(showWork, "work")}
              </Col>
            </Row>

            <Col>
              {workSections.map((section, index) => {
                return (
                  <div key={index}>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Form.Label
                          className="section-styling my-2"
                          onClick={() => showModals(index, allSetModalsWork)}
                        >
                          {section.name}
                        </Form.Label>
                      </Col>

                      <Col md={6} className="d-flex justify-content-end">
                        <Form.Label
                          className="section-styling mt-2 me-3"
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
                          className="section-styling mt-2"
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
        <Row>
          <Col
            md={9}
            className="d-flex justify-content-start align-items-center"
          >
            {renameSkills.isInEditMode ? (
              <Form.Label className="section-styling mt-2">
                {renderEditView(
                  renameSkills.value,
                  setRenameSkills,
                  ".section-titles-skills"
                )}
              </Form.Label>
            ) : (
              <Form.Label
                className="section-styling mt-2"
                onClick={() => setModalSkills(true)}
              >
                {renameSkills.value}
              </Form.Label>
            )}
          </Col>
          <Col md={3} className="d-flex justify-content-end align-items-center">
            <Form.Label
              className="section-styling me-2"
              onClick={() => toggleRenameMode(renameSkills, setRenameSkills)}
            >
              <MdDriveFileRenameOutline />
            </Form.Label>
            <Switch
              defaultChecked
              onClick={() => ToggleSwitchButton(showSkills, setShowSkills)}
            />
            {showSkills
              ? toggleCurrModal(showSkills, "skillsField")
              : toggleCurrModal(showSkills, "skillsField")}
          </Col>
        </Row>
        <Row>
          <Col
            md={9}
            className="d-flex justify-content-start align-items-center"
          >
            {renameEducation.isInEditMode ? (
              <Form.Label className="section-styling mt-2">
                {renderEditView(
                  renameEducation.value,
                  setRenameEducation,
                  ".section-titles-education"
                )}
              </Form.Label>
            ) : (
              <Form.Label
                className="section-styling mt-2"
                onClick={() => setModalEducation(true)}
              >
                {renameEducation.value}
              </Form.Label>
            )}
          </Col>
          <Col md={3} className="d-flex justify-content-end align-items-center">
            <Form.Label
              className="section-styling me-2"
              onClick={() =>
                toggleRenameMode(renameEducation, setRenameEducation)
              }
            >
              <MdDriveFileRenameOutline />
            </Form.Label>
            <Switch
              defaultChecked
              onClick={() =>
                ToggleSwitchButton(showEducation, setShowEducation)
              }
            />
            {showEducation
              ? toggleCurrModal(showEducation, "educationField")
              : toggleCurrModal(showEducation, "educationField")}
          </Col>
        </Row>
        <Row>
          <Col
            md={9}
            className="d-flex justify-content-start align-items-center"
          >
            {renameLanguages.isInEditMode ? (
              <Form.Label className="section-styling mt-2">
                {renderEditView(
                  renameLanguages.value,
                  setRenameLanguages,
                  ".section-titles-languages"
                )}
              </Form.Label>
            ) : (
              <Form.Label
                className="section-styling mt-2"
                onClick={() => setModalLanguages(true)}
              >
                {renameLanguages.value}
              </Form.Label>
            )}
          </Col>
          <Col md={3} className="d-flex justify-content-end align-items-center">
            <Form.Label
              className="section-styling me-2"
              onClick={() =>
                toggleRenameMode(renameLanguages, setRenameLanguages)
              }
            >
              <MdDriveFileRenameOutline />
            </Form.Label>
            <Switch
              defaultChecked
              onClick={() =>
                ToggleSwitchButton(showLanguages, setShowLanguages)
              }
            />
            {showLanguages
              ? toggleCurrModal(showLanguages, "languagesField")
              : toggleCurrModal(showLanguages, "languagesField")}
          </Col>
        </Row>
        <Row>
          <Card>
            <Row>
              <Col
                md={9}
                className="d-flex justify-content-start align-items-center mt-3"
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
              <Col
                md={3}
                className="d-flex my-3 justify-content-end align-items-center"
              >
                <Form.Label
                  className="section-styling me-2"
                  onClick={() =>
                    toggleRenameMode(renameProjects, setRenameProjects)
                  }
                >
                  <MdDriveFileRenameOutline />
                </Form.Label>
                <Switch
                  defaultChecked
                  onClick={() =>
                    ToggleSwitchButton(showProjects, setShowProjects)
                  }
                />
                {showProjects
                  ? toggleCurrModal(showProjects, "projects")
                  : toggleCurrModal(showProjects, "projects")}
              </Col>
            </Row>
            <Col>
              {projectsSections.map((section, index) => {
                return (
                  <div key={index}>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Form.Label
                          className="section-styling my-2"
                          onClick={() => showModals(index, allSetModalsProject)}
                        >
                          {section.name}
                        </Form.Label>
                      </Col>

                      <Col md={6} className="d-flex">
                        <Form.Label
                          className="section-styling mt-2 me-3"
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
                          className="section-styling mt-2"
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
          </Card>
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