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
import ModalWork2 from "./ModalWork2";
import ModalWork3 from "./ModalWork3";
import ModalSkills from "./ModalSkills";
import ModalEducation from "./ModalEducation";

function ControlPanel({ handlePrint }) {
  const [modalGenInfo, setModalGenInfo] = useState(false);
  const [modalSummary, setModalSummary] = useState(false);
  const [modalWork0, setModalWork0] = useState(false);
  const [modalWork1, setModalWork1] = useState(false);
  const [modalWork2, setModalWork2] = useState(false);
  const [modalSkills, setModalSkills] = useState(false);
  const [modalEducation, setModalEducation] = useState(false);

  const [showGenInfo, setShowGenInfo] = useState(true);
  const [showSummary, setShowSummary] = useState(true);
  const [showWork, setShowWork] = useState(true);
  const [showSkills, setShowSkills] = useState(true);
  const [showEducation, setShowEducation] = useState(true);

  const [workSections, setWorkSections] = useState([{ name: "Job 1" }]);
  const allWorkModals = [setModalWork0, setModalWork1, setModalWork2];

  const toggleModal = (showState) => {
    const genInfo = document.querySelector(".general-info-section");
    if (genInfo === null) {
      return;
    }
    if (showState) {
      genInfo.classList.remove("d-none");
    } else {
      genInfo.classList.add("d-none");
    }
  };

  // TO-DO - Disable all fields when switch is off

  const toggleModalSummary = (showState) => {
    const summary = document.querySelector(".summaryField");
    if (summary === null) {
      return;
    }
    if (showState) {
      summary.classList.remove("d-none");
    } else {
      summary.classList.add("d-none");
    }
  };

  // On and Off State switch when toggling switch button for each section
  const ToggleSwitchButton = (state, setState) => {
    state ? setState(false) : setState(true);
  };

  const toggleModalWork = () => {
    const work = document.querySelector(".workField0");
    const work1 = document.querySelector(".workField1");
    const work2 = document.querySelector(".workField2");
    const allWork = [work, work1, work2];
    // console.log(work);
    // console.log(allWork);
    allWork.forEach((curr) => {
      // if (curr.classList.contains("d-none")) {
      //   curr.classList.add("d-none");
      // }
      // curr.classList.remove("d-none");
    });
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

  const toggleModalEducation = (showState, className) => {
    const education = document.querySelector(`.` + className);
    if (education === null) {
      return;
    }
    if (showState) {
      education.classList.remove("d-none");
    } else {
      education.classList.add("d-none");
    }
  };

  // Adding additional job field - maximum of 3
  const handleAddField = () => {
    if (workSections.length < 3) {
      const values = [
        ...workSections,
        { name: `Job ` + (workSections.length + 1) },
      ];
      const nextSection = document.querySelector(
        `.workField` + workSections.length
      );
      nextSection.classList.remove("d-none");
      setWorkSections(values);
    }
  };

  // Removing selected job field based on the index of the job
  const handleRemoveField = (index) => {
    // Check if the item being removed is the last one and skip if there is only 1 item left
    if (workSections.length > 1 && workSections.length === index + 1) {
      const values = [...workSections];
      const section = document.querySelector(`.workField` + index);
      section.classList.add("d-none");
      values.splice(index, 1);
      setWorkSections(values);
    }
    return;
  };

  const showWorkModals = (index) => {
    allWorkModals.map((modal, indexModal) => {
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
                            <Col md={6}>
                              <Button
                                variant="py-3 mt-1 mb-2"
                                onClick={() => showWorkModals(index)}
                              >
                                {section.name}
                              </Button>
                            </Col>

                            <Col md={6} className="d-flex ">
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
            </div>

            <ModalInfoContent
              show={modalGenInfo}
              onHide={() => setModalGenInfo(false)}
            />
            <ModalSummary
              show={modalSummary}
              onHide={() => setModalSummary(false)}
            />

            <ModalWork show={modalWork0} onHide={() => setModalWork0(false)} />
            <ModalWork2 show={modalWork1} onHide={() => setModalWork1(false)} />
            <ModalWork3 show={modalWork2} onHide={() => setModalWork2(false)} />
            <ModalSkills
              show={modalSkills}
              onHide={() => setModalSkills(false)}
            />
            <ModalEducation
              show={modalEducation}
              onHide={() => setModalEducation(false)}
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
