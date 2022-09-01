import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Popover from "react-bootstrap/esm/Popover";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";

import {
  ToggleSwitchButton,
  toggleCurrModal,
  toggleRenameMode,
  renderEditView,
} from "./ContPanelFunctions";

export default function WorkSection() {
  // Show modal state
  const [showWork, setShowWork] = useState(true);
  // Rename section title state
  const [renameWork, setRenameWork] = useState({
    value: "Work Experience",
    isInEditMode: false,
  });

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
    <Row className="my-3">
      <Col md={10} className="d-flex justify-content-start align-items-center">
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
  );
}
