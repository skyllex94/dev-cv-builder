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

function ControlPanel({ handlePrint }) {
  const [modalGenInfo, setModalGenInfo] = useState(false);
  const [modalSummary, setModalSummary] = useState(false);
  const [modalWork0, setModalWork0] = useState(false);
  const [modalWork1, setModalWork1] = useState(false);
  const [modalWork2, setModalWork2] = useState(false);

  const [showGenInfo, setShowGenInfo] = useState(true);
  const [showSummary, setShowSummary] = useState(true);
  const [showWork, setShowWork] = useState(true);

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

  const ToggleSwitch = () => {
    showGenInfo ? setShowGenInfo(false) : setShowGenInfo(true);
  };

  const toggleModalSummary = (showState) => {
    const genInfo = document.querySelector(".summaryField");
    if (genInfo === null) {
      return;
    }
    if (showState) {
      genInfo.classList.remove("d-none");
    } else {
      genInfo.classList.add("d-none");
    }
  };

  const ToggleSwitchSummary = () => {
    showSummary ? setShowSummary(false) : setShowSummary(true);
  };

  const toggleModalWork = (showState) => {
    const work = document.querySelector(".workField");
    if (work === null) {
      return;
    }
    if (showState) {
      work.classList.remove("d-none");
    } else {
      work.classList.add("d-none");
    }
  };

  const ToggleSwitchWork = () => {
    showWork ? setShowWork(false) : setShowWork(true);
  };

  const handleAddField = () => {
    if (workSections.length < 3) {
      const values = [
        ...workSections,
        { name: `Job ` + (workSections.length + 1) },
      ];
      console.log(workSections.length);
      const nextSection = document.querySelector(
        `.workField` + workSections.length
      );
      nextSection.classList.remove("d-none");
      setWorkSections(values);
    }
  };

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
                  <Switch defaultChecked onClick={ToggleSwitch} />
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
                  <Switch defaultChecked onClick={ToggleSwitchSummary} />
                  {showSummary
                    ? toggleModalSummary(showSummary)
                    : toggleModalSummary(showSummary)}
                </Col>
              </Row>

              <Row>
                <Card>
                  <Row className="my-3">
                    <Col md={8}>
                      <Form.Label className="controlPanelWork">
                        Work Experience
                      </Form.Label>
                    </Col>
                    <Col md={4}>
                      <Switch defaultChecked onClick={ToggleSwitchWork} />
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
