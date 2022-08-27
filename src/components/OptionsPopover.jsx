import React from "react";
import Popover from "react-bootstrap/Popover";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Switch } from "antd";

function OptionsPopover() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <Row className="me-5">
          <Col className="col-10">Toggle Section</Col>
          <Col className="col-2">
            <Switch
              defaultChecked
              //   onClick={() => ToggleSwitchButton(showSummary, setShowSummary)}
            />
          </Col>
        </Row>
      </Popover.Body>
    </Popover>
  );

  return <div></div>;
}

export default OptionsPopover;
