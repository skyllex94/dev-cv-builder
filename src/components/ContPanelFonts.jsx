import React, { useEffect } from "react";
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
      document.querySelector(".contact"),
    ];

    if (font === "Default" && template === "earth") {
      try {
        arrDOMElements.forEach((element) => {
          element.style = { all: "unset" };
        });
      } catch {
        console.log("caught");
      }
    } else if (font === "Default" && template === "venus") {
      try {
        arrDOMElements.forEach((element) => {
          element.style = "font-family: Ubuntu, sans-serif";
        });
      } catch {
        console.log("caught");
      }
    } else {
      try {
        arrDOMElements.forEach((element) => {
          element.style = `font-family: ${font};`;
        });
      } catch {}
    }
  };

  return (
    <div className="cont-panel-items-styling">
      <Row>
        <Form.Label
          onClick={() => changeFont("Default", template)}
          className="items-styling ms-2 pb-2 "
        >
          Default
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Arial, sans-serif")}
          className="items-styling ms-2 pb-2 "
        >
          Arial, sans-serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Trebuchet MS, sans-serif")}
          className="items-styling ms-2 pb-2 "
        >
          Trebuchet MS, sans-serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Montserrat, sans-serif")}
          className="items-styling ms-2 pb-2 "
        >
          Montserrat, sans-serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Raleway, sans-serif")}
          className="items-styling ms-2 pb-2 "
        >
          Raleway, sans-serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Ubuntu, sans-serif")}
          className="items-styling ms-2 pb-2 "
        >
          Ubuntu, sans-serif
        </Form.Label>
      </Row>

      <Row>
        <Form.Label
          onClick={() => changeFont("Times, Times New Roman, serif")}
          className="items-styling ms-2 pb-2 "
        >
          Times, Times New Roman, serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Georgia, serif")}
          className="items-styling ms-2 pb-2 "
        >
          Georgia, serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("monospace")}
          className="items-styling ms-2 pb-2 "
        >
          Default, monospace
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Courier New, monospace")}
          className="items-styling ms-2 pb-2 "
        >
          Courier New, monospace
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Apple Chancery, cursive")}
          className="items-styling ms-2 pb-2 "
        >
          Apple Chancery, cursive
        </Form.Label>
      </Row>
    </div>
  );
}

export default ContPanelFonts;
