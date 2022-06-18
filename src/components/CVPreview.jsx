import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Context from "../context/Context";
import Form from "react-bootstrap/Form";

export class Blank extends React.PureComponent {
  render() {
    return <div></div>;
  }
}

export const CVPreview = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Row>
        <Col className="col-3 d-flex justify-content-center">
          <Form>
            <Form.Label className="nameField"></Form.Label>
          </Form>
        </Col>
        <Col className="col-9 d-flex justify-content-center">
          <div>gmail.com</div>
        </Col>
      </Row>
    </div>
  );
});

export default CVPreview;
