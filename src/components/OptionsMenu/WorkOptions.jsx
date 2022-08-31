import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { FiMoreVertical } from "react-icons/fi";
import { Switch } from "antd";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import { MdDriveFileRenameOutline } from "react-icons/md";

export default class WorkOptions extends React.Component {
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

    const toggleRenameMode = (state, setState) => {
      setState({ isInEditMode: !state.isInEditMode, value: state.value });
    };

    return (
      <div>
        <Button id="popover2" color="white" onClick={this.toggle}>
          <FiMoreVertical />
        </Button>
        <Popover
          placement="right-start"
          isOpen={this.state.popoverOpen}
          target="popover2"
          toggle={this.toggle}
          hideArrow={true}
        >
          <PopoverHeader>Options</PopoverHeader>
          <PopoverBody>
            <Row>
              <Col md={12} className="d-flex align-items-center">
                <Form.Label
                  className="items-styling me-2"
                  onClick={() => {
                    ToggleSwitchButton(
                      this.props.showWork,
                      this.props.setShowWork
                    );
                  }}
                >
                  Toggle Section
                </Form.Label>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="d-flex align-items-center">
                <Form.Label
                  className="items-styling me-2"
                  onClick={() =>
                    toggleRenameMode(
                      this.props.renameWork,
                      this.props.setRenameWork
                    )
                  }
                >
                  Rename Section Title
                </Form.Label>
              </Col>
            </Row>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}
