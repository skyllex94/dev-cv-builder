import React, { useState, useContext } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Popover from "react-bootstrap/esm/Popover";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import ModalLanguages from "../InputModals/ModalLanguages";

import {
  ToggleSwitchButton,
  toggleCurrModal,
  toggleRenameMode,
  renderEditView,
} from "./ContPanelFunctions";
import Context from "../../context/Context";

export default function LanguagesSection() {
  // Show modal state
  const [showLanguages, setShowLanguages] = useState(true);
  // Rename section title state
  const [renameLanguages, setRenameLanguages] = useState({
    value: "Languages",
    isInEditMode: false,
  });

  const { renameSection } = useContext(Context);

  const [modalLanguages, setModalLanguages] = useState(false);

  // Popover Options Dropdown Menu
  const popover = (
    <Popover style={{ padding: "15px" }}>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() => ToggleSwitchButton(showLanguages, setShowLanguages)}
        >
          Show/Hide Section
        </Form.Label>
      </Col>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() => toggleRenameMode(renameLanguages, setRenameLanguages)}
        >
          Rename Section Title
        </Form.Label>
      </Col>
    </Popover>
  );

  return (
    // The whole section row as displayed in the Control Panel
    <Row>
      <Col
        xs={10}
        md={10}
        className="d-flex justify-content-start align-items-center"
      >
        {renameLanguages.isInEditMode ? (
          <Form.Label
            className="items-styling mt-2"
            onClick={() => renameSection("language", renameLanguages.value)}
          >
            {renderEditView(
              renameLanguages.value,
              setRenameLanguages,
              ".section-titles-languages"
            )}
          </Form.Label>
        ) : (
          <Form.Label
            className="items-styling mt-2"
            onClick={() => setModalLanguages(true)}
          >
            {renameLanguages.value}
          </Form.Label>
        )}
      </Col>
      <Col
        xs={2}
        md={2}
        className="d-flex justify-content-end align-items-center"
      >
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

      {showLanguages
        ? toggleCurrModal(showLanguages, "languagesField")
        : toggleCurrModal(showLanguages, "languagesField")}

      <ModalLanguages
        show={modalLanguages}
        onHide={() => setModalLanguages(false)}
      />
    </Row>
  );
}
