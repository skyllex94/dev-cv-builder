import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";

import Popover from "react-bootstrap/esm/Popover";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";

import { ToggleSwitchButton, toggleCurrModal } from "./ContPanelFunctions";

import ModalSummary from "../InputModals/ModalSummary";

export default function SummarySection() {
  const [modalSummary, setModalSummary] = useState(false);
  const [showSummary, setShowSummary] = useState(true);

  const popover = (
    <Popover style={{ padding: "15px" }}>
      <Form.Label
        className="optionItems p-1"
        onClick={() => ToggleSwitchButton(showSummary, setShowSummary)}
      >
        Show/Hide Section
      </Form.Label>
    </Popover>
  );

  return (
    <Row className="mt-2">
      <Col
        xs={10}
        md={10}
        className="d-flex justify-content-start align-items-center"
      >
        <Form.Label
          className="items-styling"
          onClick={() => setModalSummary(true)}
        >
          Summary
        </Form.Label>
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

      {showSummary
        ? toggleCurrModal(showSummary, "summary")
        : toggleCurrModal(showSummary, "summary")}

      <ModalSummary show={modalSummary} onHide={() => setModalSummary(false)} />
    </Row>
  );
}
