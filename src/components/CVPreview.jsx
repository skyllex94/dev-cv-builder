import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default class CVPreview extends React.PureComponent {
  render() {
    return (
      <div>
        <Row className="text-center">
          <Col className="col-3">
            <div>Kamen Kanchev</div>
          </Col>
          <Col className="col-9">
            <div>Email:kkanchev94@gmail.com</div>
          </Col>
        </Row>
      </div>
    );
  }
}
