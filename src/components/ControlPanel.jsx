import "../index.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/esm/Button";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import { Switch } from "antd";

import ModalInfoContent from "./ModalInfoContent";

import React, { useState } from "react";
import ModalSummary from "./ModalSummary";
import ModalWork from "./ModalWork";

function ControlPanel({ handlePrint }) {
  const [modalGenInfo, setModalGenInfo] = useState(false);
  const [modalSummary, setModalSummary] = useState(false);
  const [modalWork, setModalWork] = useState(false);

  const [showGenInfo, setShowGenInfo] = useState(true);

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

  const ToggleSwitch = () => {
    showGenInfo ? setShowGenInfo(false) : setShowGenInfo(true);
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

              <Button
                variant="light py-3 mt-1"
                onClick={() => setModalSummary(true)}
              >
                Summary
              </Button>
              <Button
                variant="light py-3 mt-1"
                onClick={() => setModalWork(true)}
              >
                Work Experience
              </Button>
            </div>

            <ModalInfoContent
              show={modalGenInfo}
              onHide={() => setModalGenInfo(false)}
            />
            <ModalSummary
              show={modalSummary}
              onHide={() => setModalSummary(false)}
            />
            <ModalWork show={modalWork} onHide={() => setModalWork(false)} />
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
