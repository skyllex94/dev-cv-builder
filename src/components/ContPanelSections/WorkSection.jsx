import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

import Popover from "react-bootstrap/esm/Popover";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ModalWork from "../InputModals/ModalWork";

import {
  ToggleSwitchButton,
  toggleCurrModal,
  toggleRenameMode,
  renderEditView,
  showModals,
  handleAddField,
  handleRemoveField,
} from "./ContPanelFunctions";

export default function WorkSection() {
  // Show modal state
  const [showWork, setShowWork] = useState(true);
  // Rename section title state
  const [renameWork, setRenameWork] = useState({
    value: "Work Experience",
    isInEditMode: false,
  });
  // Array of jobs
  const [workSections, setWorkSections] = useState([{ name: "Job 1" }]);

  // Work states each on for generating a state for a modal to fill-in the data for the specific job
  const [modalWork0, setModalWork0] = useState(false);
  const [modalWork1, setModalWork1] = useState(false);
  const [modalWork2, setModalWork2] = useState(false);
  const [modalWork3, setModalWork3] = useState(false);
  const [modalWork4, setModalWork4] = useState(false);

  // Array of all Work Modal states
  let modalsWork = [modalWork0, modalWork1, modalWork2, modalWork3, modalWork4];

  // Array of all the setState for each Work Modal
  let allSetModalsWork = [
    setModalWork0,
    setModalWork1,
    setModalWork2,
    setModalWork3,
    setModalWork4,
  ];

  // Popover Options Dropdown Menu
  const popover = (
    <Popover style={{ padding: "15px" }}>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() => ToggleSwitchButton(showWork, setShowWork)}
        >
          Show/Hide Section
        </Form.Label>
      </Col>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() => toggleRenameMode(renameWork, setRenameWork)}
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
              {renameWork.isInEditMode
                ? renderEditView(
                    renameWork.value,
                    setRenameWork,
                    ".section-titles-work"
                  )
                : renameWork.value}
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

          {showWork
            ? toggleCurrModal(showWork, "work")
            : toggleCurrModal(showWork, "work")}
        </Row>
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
  );
}