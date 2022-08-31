import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { FiMoreVertical } from "react-icons/fi";
import { Switch } from "antd";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";

export default class SummaryOptions extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  render() {
    const ToggleSwitchButton = (state, setState) => {
      state ? setState(false) : setState(true);
    };

    return (
      <div>
        <Button id="popover" color="white" onClick={this.toggle}>
          <FiMoreVertical />
        </Button>
        <Popover
          placement="right-start"
          isOpen={this.state.popoverOpen}
          target="popover"
          toggle={this.toggle}
          hideArrow={true}
        >
          <PopoverHeader>Options</PopoverHeader>
          <PopoverBody>
            <Row>
              <Col md={8} className="d-flex align-items-center">
                <Form.Label>Display Section</Form.Label>
              </Col>
              <Col md={4} className="d-flex align-items-center">
                <Switch
                  defaultChecked
                  onClick={() => {
                    ToggleSwitchButton(
                      this.props.showSummary,
                      this.props.setShowSummary
                    );
                  }}
                />
              </Col>
            </Row>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}
