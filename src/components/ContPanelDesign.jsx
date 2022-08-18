import React, { useState, useRef, useEffect } from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Popover from "react-bootstrap/esm/Popover";
import Button from "react-bootstrap/esm/Button";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import { SketchPicker } from "react-color";

function ContPanelDesign() {
  const [color, setColor] = useState({
    displayColorPicker: true,
    hex: {
      r: "241",
      g: "112",
      b: "19",
      a: "1",
    },
  });

  const handleColorChange = (color) => {
    setColor({ hex: color.hex });

    const sectionTitles = document.querySelectorAll(
      '[class*="section-titles"]'
    );

    sectionTitles.forEach((title) => {
      title.style = `color: ${color.hex}`;
    });
  };

  const popover = (
    <Popover id="popover-contained">
      <SketchPicker color={color.hex} onChange={handleColorChange} />
    </Popover>
  );

  return (
    <Row>
      <OverlayTrigger
        trigger="click"
        rootClose
        placement="bottom"
        overlay={popover}
      >
        <Form.Label className="cont-panel-items-styling items-styling">
          Change Color of Titles
        </Form.Label>
      </OverlayTrigger>
    </Row>
  );
}

export default ContPanelDesign;
