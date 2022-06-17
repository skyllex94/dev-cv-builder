import React, { useState, useContext } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Context from "../context/Context";

export class Blank extends React.PureComponent {
  render() {
    return <div></div>;
  }
}

export const CVPreview = React.forwardRef((props, ref) => {
  const nameExample = "KamenTheBeast";

  function nameValue() {
    const namie = document.querySelector(".textName");
    if (namie.value == null) {
      namie.value = "";
    }
  }

  return (
    <div ref={ref}>
      <Row>
        <Col className="col-3 d-flex justify-content-center">
          <div>{nameValue}</div>
        </Col>
        <Col className="col-9 d-flex justify-content-center">
          <div>gmail.com</div>
        </Col>
      </Row>
    </div>
  );
});

export default CVPreview;
