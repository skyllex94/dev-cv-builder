import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Popover from "react-bootstrap/esm/Popover";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import ModalEducation from "../InputModals/ModalEducation";

import {
  ToggleSwitchButton,
  toggleCurrModal,
  toggleRenameMode,
  renderEditView,
} from "./ContPanelFunctions";

export default function EducationSection() {
  // Show modal state
  const [showEducation, setShowEducation] = useState(true);
  // Rename section title state
  const [renameEducation, setRenameEducation] = useState({
    value: "Education",
    isInEditMode: false,
  });

  const [modalEducation, setModalEducation] = useState(false);

  // Popover Options Dropdown Menu
  const popover = (
    <Popover style={{ padding: "15px" }}>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() => ToggleSwitchButton(showEducation, setShowEducation)}
        >
          Show/Hide Section
        </Form.Label>
      </Col>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() => toggleRenameMode(renameEducation, setRenameEducation)}
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
        {renameEducation.isInEditMode ? (
          <Form.Label className="items-styling mt-2">
            {renderEditView(
              renameEducation.value,
              setRenameEducation,
              ".section-titles-education"
            )}
          </Form.Label>
        ) : (
          <Form.Label
            className="items-styling mt-2"
            onClick={() => setModalEducation(true)}
          >
            {renameEducation.value}
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

      {showEducation
        ? toggleCurrModal(showEducation, "education")
        : toggleCurrModal(showEducation, "education")}

      <ModalEducation
        show={modalEducation}
        onHide={() => setModalEducation(false)}
      />
    </Row>
  );
}
