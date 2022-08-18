import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import { SketchPicker } from "react-color";

function ContPanelDesign() {
  const [showColorOptions, setShowColorOptions] = useState(false);

  const toggleColorOptions = () => {
    showColorOptions ? setShowColorOptions(false) : setShowColorOptions(true);
  };

  const [color, setColor] = useState({
    hex: "#fff",
  });

  const handleColorChange = (color) => {
    setColor({ hex: color.hex });

    const sectionTitles = document.querySelectorAll(
      '[class*="section-titles"]'
    );

    sectionTitles.forEach((title) => {
      console.log(title.style);
      title.style = `color: ${color.hex}`;
    });
  };

  return (
    <div className="cont-panel-items-styling">
      <Row>
        <Form.Label
          onClick={() => toggleColorOptions()}
          className="items-styling ms-2 pb-2"
        >
          Change Color of Titles
        </Form.Label>
        {showColorOptions ? (
          <SketchPicker
            className="ms-3"
            color={color.hex}
            onChange={handleColorChange}
          />
        ) : null}
      </Row>
    </div>
  );
}

export default ContPanelDesign;
