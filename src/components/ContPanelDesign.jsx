import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Popover from "react-bootstrap/esm/Popover";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import { SketchPicker } from "react-color";
import { EmptySection } from "./EmptySection";

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
    <Popover>
      <SketchPicker color={color.hex} onChange={handleColorChange} />
    </Popover>
  );

  return (
    <div className="cont-panel-items-styling">
      <Row>
        <div className="text-left">
          <OverlayTrigger
            trigger="click"
            rootClose
            placement="bottom-end"
            overlay={popover}
          >
            <Form.Label className="cont-panel-items-styling items-styling">
              Change Color of Titles
            </Form.Label>
          </OverlayTrigger>
        </div>
      </Row>
      <Row className="mt-2">
        <EmptySection />
      </Row>
    </div>
  );
}

export default ContPanelDesign;
