import React from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";

import { useLocation } from "react-router-dom";

function ContPanelFonts() {
  const location = useLocation();
  const { template } = location.state;

  const changeFont = (font) => {
    const arrDOMElements = [
      document.querySelector(".general-info"),
      document.querySelector(".summary"),
      document.querySelector(".work"),
      document.querySelector(".skills"),
      document.querySelector(".languages"),
      document.querySelector(".education"),
      document.querySelector(".projects"),
    ];
    if (font === "Default" && template === "earth") {
      arrDOMElements.forEach((element) => {
        element.style = { all: "unset" };
      });
    } else if (font === "Default" && template === "venus") {
      arrDOMElements.forEach((element) => {
        element.style = "font-family: Ubuntu, sans-serif";
      });
    } else {
      arrDOMElements.forEach((element) => {
        element.style = `font-family: ${font};`;
      });
    }
  };
  return (
    <div className="font-section">
      <Row>
        <Form.Label
          onClick={() => changeFont("Default", template)}
          className="font-options ms-2 pb-2 section-styling"
        >
          Default
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Arial, sans-serif")}
          className="font-options ms-2 pb-2 section-styling"
        >
          Arial, sans-serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Trebuchet MS, sans-serif")}
          className="font-options ms-2 pb-2 section-styling"
        >
          Trebuchet MS, sans-serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Montserrat, sans-serif")}
          className="font-options ms-2 pb-2 section-styling"
        >
          Montserrat, sans-serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Raleway, sans-serif")}
          className="font-options ms-2 pb-2 section-styling"
        >
          Raleway, sans-serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Ubuntu, sans-serif")}
          className="font-options ms-2 pb-2 section-styling"
        >
          Ubuntu, sans-serif
        </Form.Label>
      </Row>

      <Row>
        <Form.Label
          onClick={() => changeFont("Times, Times New Roman, serif")}
          className="font-options ms-2 pb-2 section-styling"
        >
          Times, Times New Roman, serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Georgia, serif")}
          className="font-options ms-2 pb-2 section-styling"
        >
          Georgia, serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("monospace")}
          className="font-options ms-2 pb-2 section-styling"
        >
          Default, monospace
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Courier New, monospace")}
          className="font-options ms-2 pb-2 section-styling"
        >
          Courier New, monospace
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Apple Chancery, cursive")}
          className="font-options ms-2 pb-2 section-styling"
        >
          Apple Chancery, cursive
        </Form.Label>
      </Row>
    </div>
  );
}

export default ContPanelFonts;
