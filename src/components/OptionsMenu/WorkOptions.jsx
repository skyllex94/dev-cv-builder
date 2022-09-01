import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";

import Popover from "react-bootstrap/esm/Popover";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";

export default function WorkOptions({ props }) {
  const [showWork, setShowWork] = useState(true);
  const [renameWork, setRenameWork] = useState({
    value: "Work Experience",
    isInEditMode: false,
  });

  const ToggleSwitchButton = (state, setState) => {
    state ? setState(false) : setState(true);
  };

  const toggleCurrModal = (showState, UIClassName) => {
    const modal = document.querySelector("." + UIClassName);
    if (modal === null) {
      return;
    }
    if (showState) {
      modal.classList.remove("d-none");
    } else {
      modal.classList.add("d-none");
    }
  };

  const toggleRenameMode = (state, setState) => {
    setState({ isInEditMode: !state.isInEditMode, value: state.value });
  };

  const renderEditView = (value, setValue, UIClassName) => {
    return (
      <Col className="d-flex d-inline">
        <Form.Control
          type="text"
          defaultValue={value}
          autoFocus
          onChange={(event) =>
            setValue({ isInEditMode: true, value: event.target.value })
          }
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              updateRenameValue(value, setValue, UIClassName);
            }
          }}
        />
        <Button
          variant="success"
          onClick={() => updateRenameValue(value, setValue, UIClassName)}
        >
          ✓
        </Button>
      </Col>
    );
  };

  const updateRenameValue = (value, setValue, UIClassName) => {
    setValue({ isInEditMode: false, value: value });
    document.querySelector(UIClassName).textContent = value;
  };

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
