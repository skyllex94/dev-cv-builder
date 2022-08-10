import React from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";

function ContPanelFonts() {
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
    if (font === "Inter, sans-serif") {
      arrDOMElements.forEach((element) => {
        element.style = { all: "unset" };
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
          onClick={() => changeFont("Inter, sans-serif")}
          className="font-options ms-2 pb-2"
        >
          Default
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Arial, sans-serif")}
          className="font-options ms-2 pb-2"
        >
          Arial, sans-serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Trebuchet MS, sans-serif")}
          className="font-options ms-2 pb-2"
        >
          Trebuchet MS, sans-serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Montserrat, sans-serif")}
          className="font-options ms-2 pb-2"
        >
          Montserrat, sans-serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Raleway, sans-serif")}
          className="font-options ms-2 pb-2"
        >
          Raleway, sans-serif
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Ubuntu, sans-serif")}
          className="font-options ms-2 pb-2"
        >
          Ubuntu, sans-serif
        </Form.Label>
      </Row>

      <Row>
        <Form.Label
          onClick={() => changeFont("Times, Times New Roman, serif")}
          className="font-options ms-2 pb-2"
        >
          Times, Times New Roman, serif
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
          onClick={() => changeFont("monospace")}
          className="font-options ms-2 pb-2"
        >
          Default, monospace
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Courier New, monospace")}
          className="font-options ms-2 pb-2"
        >
          Courier New, monospace
        </Form.Label>
      </Row>
      <Row>
        <Form.Label
          onClick={() => changeFont("Apple Chancery, cursive")}
          className="font-options ms-2 pb-2"
        >
          Apple Chancery, cursive
        </Form.Label>
      </Row>
    </div>
  );
}

export default ContPanelFonts;
