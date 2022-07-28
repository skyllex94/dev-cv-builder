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

function ControlPanel({ handlePrint }) {
  const [modalGenInfo, setModalGenInfo] = useState(false);
  const [modalSummary, setModalSummary] = useState(false);

  // Work states each on for generating a state for a modal to fill-in the data for the specific job
  const [modalWork0, setModalWork0] = useState(false);
  const [modalWork1, setModalWork1] = useState(false);
  const [modalWork2, setModalWork2] = useState(false);
  const [modalWork3, setModalWork3] = useState(false);
  const [modalWork4, setModalWork4] = useState(false);

  let modalsWork = [modalWork0, modalWork1, modalWork2, modalWork3, modalWork4];
  let allSetModalsWork = [
    setModalWork0,
    setModalWork1,
    setModalWork2,
    setModalWork3,
    setModalWork4,
  ];

  const [modalSkills, setModalSkills] = useState(false);
  const [modalEducation, setModalEducation] = useState(false);
  const [modalLanguages, setModalLanguages] = useState(false);

  const [showGenInfo, setShowGenInfo] = useState(true);
  const [showSummary, setShowSummary] = useState(true);
  const [showWork, setShowWork] = useState(true);
  const [showSkills, setShowSkills] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showLanguages, setShowLanguages] = useState(true);

  const [workSections, setWorkSections] = useState([{ name: "Job 1" }]);

  const toggleModal = (showState) => {
    const genInfo = document.querySelector(".general-info");
    if (genInfo === null) {
      return;
    }
    if (showState) {
      genInfo.classList.remove("d-none");
    } else {
      genInfo.classList.add("d-none");
    }
  };

  const toggleModalSummary = (showState) => {
    const summary = document.querySelector(".summary");
    const summaryField = document.querySelector(".summaryField");
    if (summaryField === null) {
      return;
    }
    if (showState) {
      summaryField.classList.remove("d-none");
      summary.classList.remove("d-none");
    } else {
      summaryField.classList.add("d-none");
      summary.classList.add("d-none");
    }
  };

  // On and Off State switch when toggling switch button for each section
  const ToggleSwitchButton = (state, setState) => {
    state ? setState(false) : setState(true);
  };

  const toggleModalWork = (showState) => {
    const allWorkModals = document.querySelectorAll("#workSection");

    if (showState) {
      allWorkModals.forEach((curr, index) => {
        // Display only as many work jobs as the amounts of jobs you have added in the Control Panel
        if (workSections[index] != null) {
          curr.classList.remove("d-none");
        }
      });
    } else {
      allWorkModals.forEach((curr) => {
        curr.classList.add("d-none");
      });
    }
  };

  const toggleModalSkills = (showState) => {
    const skills = document.querySelector(".skillsField");
    if (skills === null) {
      return;
    }
    if (showState) {
      skills.classList.remove("d-none");
    } else {
      skills.classList.add("d-none");
    }
  };

  const toggleModalEducation = (showState, UIClassName) => {
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
  const handleAddField = () => {
    if (workSections.length < 5) {
      const values = [
        ...workSections,
        { name: `Job ` + (workSections.length + 1) },
      ];

      workSections.map((section) => {
        return <ModalWork show={showWork} onHide={false} />;
      });

      setWorkSections(values);
    }
  };

  // Removing selected job field based on the index of the job
  const handleRemoveField = (index) => {
    // Check if the item being removed is the last one and skip if there is only 1 item left
    if (workSections.length > 1 && workSections.length === index + 1) {
      const values = [...workSections];
      const displayWorkSection = document.querySelector(
        ".workField" + (index + 1)
      );
      displayWorkSection.classList.add("d-none");
      values.splice(index, 1);
      setWorkSections(values);
    }
    return;
  };

  const showWorkModals = (index) => {
    allSetModalsWork.map((modal, indexModal) => {
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
                <Col md={12}>
                  <Button
                    variant="py-3 mt-1"
                    onClick={() => setModalGenInfo(true)}
                  >
                    General Information
                  </Button>
                  <Switch
                    defaultChecked
                    onClick={() =>
                      ToggleSwitchButton(showGenInfo, setShowGenInfo)
                    }
                  />
                  {showGenInfo
                    ? toggleModal(showGenInfo)
                    : toggleModal(showGenInfo)}
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Button
                    variant="py-3 mt-1"
                    onClick={() => setModalSummary(true)}
                  >
                    Summary
                  </Button>
                  <Switch
                    defaultChecked
                    onClick={() =>
                      ToggleSwitchButton(showSummary, setShowSummary)
                    }
                  />
                  {showSummary
                    ? toggleModalSummary(showSummary)
                    : toggleModalSummary(showSummary)}
                </Col>
              </Row>

              <Row>
                <Card>
                  <Row className="my-3">
                    <Col md={12}>
                      <Form.Label className="controlPanelWork me-3">
                        Work Experience
                      </Form.Label>
                      <Switch
                        defaultChecked
                        onClick={() =>
                          ToggleSwitchButton(showWork, setShowWork)
                        }
                      />
                      {showWork
                        ? toggleModalWork(showWork)
                        : toggleModalWork(showWork)}
                    </Col>
                  </Row>

                  <Col>
                    {workSections.map((section, index) => {
                      return (
                        <div key={index}>
                          <Row className="mb-2">
                            <Col xs={6}>
                              <Button
                                variant="py-3 mt-1 mb-2"
                                onClick={() => showWorkModals(index)}
                              >
                                {section.name}
                              </Button>
                            </Col>

                            <Col xs={6}>
                              <Button
                                variant="white"
                                onClick={() => handleAddField()}
                              >
                                <AiOutlinePlus />
                              </Button>
                              <Button
                                variant="white"
                                onClick={() => handleRemoveField(index)}
                              >
                                <AiOutlineMinus />
                              </Button>
                            </Col>
                          </Row>
                          <ModalWork
                            show={modalsWork[index]}
                            onHide={() => allSetModalsWork[index](false)}
                            jobCount={index}
                          />
                        </div>
                      );
                    })}
                  </Col>
                </Card>
              </Row>
              <Row>
                <Col md={12}>
                  <Button
                    variant="py-3 mt-1"
                    onClick={() => setModalSkills(true)}
                  >
                    Skills
                  </Button>
                  <Switch
                    defaultChecked
                    onClick={() =>
                      ToggleSwitchButton(showSkills, setShowSkills)
                    }
                  />
                  {showSkills
                    ? toggleModalSkills(showSkills)
                    : toggleModalSkills(showSkills)}
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Button
                    variant="py-3 mt-1"
                    onClick={() => setModalEducation(true)}
                  >
                    Education
                  </Button>
                  <Switch
                    defaultChecked
                    onClick={() =>
                      ToggleSwitchButton(showEducation, setShowEducation)
                    }
                  />
                  {showEducation
                    ? toggleModalEducation(showEducation, "educationField")
                    : toggleModalEducation(showEducation, "educationField")}
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Button
                    variant="py-3 mt-1"
                    onClick={() => setModalLanguages(true)}
                  >
                    Languages
                  </Button>
                  <Switch
                    defaultChecked
                    onClick={() =>
                      ToggleSwitchButton(showLanguages, setShowLanguages)
                    }
                  />
                  {showLanguages
                    ? toggleModalEducation(showLanguages, "languagesField")
                    : toggleModalEducation(showLanguages, "languagesField")}
                </Col>
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="d-grid gap-2">
        <Button variant="outline-dark my-2" onClick={handlePrint}>
          Download PDF
        </Button>
      </div>
    </div>
  );
}

export default ControlPanel;
