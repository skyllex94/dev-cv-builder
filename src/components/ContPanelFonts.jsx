import React from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";

function ContPanelFonts() {
  const changeFont = (font) => {
    document.querySelector(".general-info").style = `font-family: ${font};`;
    document.querySelector(".summary").style = `font-family: ${font};`;
    document.querySelector(".work").style = `font-family: ${font};`;
    document.querySelector(".skills").style = `font-family: ${font};`;
    document.querySelector(".languages").style = `font-family: ${font};`;
    document.querySelector(".education").style = `font-family: ${font};`;
    document.querySelector(".projects").style = `font-family: ${font};`;
  };
  return (
    <div className="font-section">
      <Row>
        <Form.Label
          onClick={() => changeFont("Inter, sans-serif")}
          className="font-options ms-2 pb-2"
        >
          Default
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Georgia, serif")}
          className="font-options ms-2 pb-2"
        >
          Georgia, serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Helvatica, serif")}
          className="font-options ms-2 pb-2"
        >
          Helvatica, serif
        </Form.Label>
      </Row>
    </div>
  );
}

export default ContPanelFonts;
