import "../index.css";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import { Switch } from "antd";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import ModalInfoContent from "./ModalInfoContent";
import ModalSummary from "./ModalSummary";
import ModalWork from "./ModalWork";
import ModalSkills from "./ModalSkills";
import ModalEducation from "./ModalEducation";
import ModalLanguages from "./ModalLanguages";
import ModalProjects from "./ModalProjects";

function ControlPanel({ handlePrint }) {
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
    const education = document.querySelector("." + UIClassName);
    if (education === null) {
      return;
    }
    if (showState) {
      education.classList.remove("d-none");
    } else {
      education.classList.add("d-none");
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

  return (
    <div className="control-panel">
      <Accordion className="mb-2 bg-light" defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordion_header">
            Sections
          </Accordion.Header>
          <Accordion.Body>
            <div className="d-grid gap-2">
              <Row>
                <Col md={10} className="d-flex justify-content-start">
                  <Button
                    variant="py-3 mt-1"
                    onClick={() => setModalGenInfo(true)}
                  >
                    General Information
                  </Button>
                </Col>
                <Col md={2} className="d-flex mt-2 justify-content-end">
                  <Switch
                    defaultChecked
                    onClick={() =>
                      ToggleSwitchButton(showGenInfo, setShowGenInfo)
                    }
                  />
                  {showGenInfo
                    ? toggleCurrModal(showGenInfo, "general-info")
                    : toggleCurrModal(showGenInfo, "general-info")}
                </Col>
              </Row>

              <Row>
                <Col md={10} className="d-flex justify-content-start">
                  <Button
                    variant="py-3 mt-1"
                    onClick={() => setModalSummary(true)}
                  >
                    Summary
                  </Button>
                </Col>
                <Col md={2} className="d-flex mt-2 justify-content-end">
                  <Switch
                    defaultChecked
                    onClick={() =>
                      ToggleSwitchButton(showSummary, setShowSummary)
                    }
                  />
                  {showSummary
                    ? toggleCurrModal(showSummary, "summaryField")
                    : toggleCurrModal(showSummary, "summaryField")}
                </Col>
              </Row>

              <Row>
                <Card>
                  <Row className="my-3">
                    <Col md={10} className="d-flex justify-content-start">
                      <Form.Label className="controlPanelWork me-3">
                        Work Experience
                      </Form.Label>
                    </Col>
                    <Col md={2} className="d-flex justify-content-end">
                      <Switch
                        defaultChecked
                        onClick={() =>
                          ToggleSwitchButton(showWork, setShowWork)
                        }
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
                              <Button
                                variant="py-3 mt-1 mb-2"
                                onClick={() =>
                                  showModals(index, allSetModalsWork)
                                }
                              >
                                {section.name}
                              </Button>
                            </Col>

                            <Col md={6} className="d-flex">
                              <Button
                                variant="white"
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
                              </Button>
                              <Button
                                variant="white"
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
                              </Button>
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
                <Col md={10} className="d-flex justify-content-start">
                  <Button variant="white" onClick={() => setModalSkills(true)}>
                    Skills
                  </Button>
                </Col>
                <Col md={2} className="d-flex mt-2 justify-content-end">
                  <Switch
                    defaultChecked
                    onClick={() =>
                      ToggleSwitchButton(showSkills, setShowSkills)
                    }
                  />
                  {showSkills
                    ? toggleCurrModal(showSkills, "skillsField")
                    : toggleCurrModal(showSkills, "skillsField")}
                </Col>
              </Row>
              <Row>
                <Col md={10} className="d-flex justify-content-start">
                  <Button
                    variant="white"
                    onClick={() => setModalEducation(true)}
                  >
                    Education
                  </Button>
                </Col>
                <Col md={2} className="d-flex mt-2 justify-content-end">
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
                <Col md={10} className="d-flex justify-content-start">
                  <Button
                    variant="white"
                    onClick={() => setModalLanguages(true)}
                  >
                    Languages
                  </Button>
                </Col>
                <Col md={2} className="d-flex mt-2 justify-content-end">
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
                    <Col md={10} className="d-flex justify-content-start mt-3">
                      <Form.Label className="controlPanelWork me-3">
                        Personal Projects
                      </Form.Label>
                    </Col>
                    <Col md={2} className="d-flex my-3 justify-content-end">
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
                              <Button
                                variant="py-3 mt-1 mb-2"
                                onClick={() =>
                                  showModals(index, allSetModalsProject)
                                }
                              >
                                {section.name}
                              </Button>
                            </Col>

                            <Col md={6} className="d-flex">
                              <Button
                                variant="white"
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
                              </Button>
                              <Button
                                variant="white"
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
                              </Button>
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
            <ModalSummary
              show={modalSummary}
              onHide={() => setModalSummary(false)}
            />

            <ModalSkills
              show={modalSkills}
              onHide={() => setModalSkills(false)}
            />
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="d-grid gap-2">
        <Button variant="outline-dark mt-2" onClick={handlePrint}>
          Download PDF
        </Button>
      </div>
    </div>
  );
}

export default ControlPanel;
