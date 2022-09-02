import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Popover from "react-bootstrap/esm/Popover";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import ModalSkills from "../InputModals/ModalSkills";

import {
  ToggleSwitchButton,
  toggleCurrModal,
  toggleRenameMode,
  renderEditView,
} from "./ContPanelFunctions";

export default function SkillsSection() {
  // Show modal state
  const [showSkills, setShowSkill] = useState(true);
  // Rename section title state
  const [renameSkills, setRenameSkills] = useState({
    value: "Skills",
    isInEditMode: false,
  });

  const [modalSkills, setModalSkills] = useState(false);

  // Popover Options Dropdown Menu
  const popover = (
    <Popover style={{ padding: "15px" }}>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() => ToggleSwitchButton(showSkills, setShowSkill)}
        >
          Show/Hide Section
        </Form.Label>
      </Col>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() => toggleRenameMode(renameSkills, setRenameSkills)}
        >
          Rename Section Title
        </Form.Label>
      </Col>
    </Popover>
  );

  return (
    // The whole section row as displayed in the Control Panel
    <Row>
      <Col md={10} className="d-flex justify-content-start align-items-center">
        {renameSkills.isInEditMode ? (
          <Form.Label className="items-styling mt-2">
            {renderEditView(
              renameSkills.value,
              setRenameSkills,
              ".section-titles-skills"
            )}
          </Form.Label>
        ) : (
          <Form.Label
            className="items-styling mt-2"
            onClick={() => setModalSkills(true)}
          >
            {renameSkills.value}
          </Form.Label>
        )}
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

      {showSkills
        ? toggleCurrModal(showSkills, "skills")
        : toggleCurrModal(showSkills, "skills")}

      <ModalSkills show={modalSkills} onHide={() => setModalSkills(false)} />
    </Row>
  );
}
