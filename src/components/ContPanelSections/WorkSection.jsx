import React, { useState, createContext } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

import Popover from "react-bootstrap/esm/Popover";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ModalWork from "../InputModals/ModalWork";

import {
  ToggleSwitchButton,
  toggleCurrModal,
  toggleRenameMode,
  renderEditView,
  showModalz,
  removeField,
} from "./ContPanelFunctions";
import { useContext } from "react";
import Context from "../../context/Context";

export default function WorkSection() {
  // Show modal state
  const [showWork, setShowWork] = useState(true);
  // Rename section title state
  const [renameWork, setRenameWork] = useState({
    value: "Work Experience",
    isInEditMode: false,
  });

  // Array of all the jobs
  const [modals, setModals] = useState([{ job: false }]);

  const { addJob } = useContext(Context);

  const [values, setValues] = useState([
    {
      company: "DXC Technology Inn!",
      position: "Front-End Developer",
      startDate: "2019-05-29",
      endDate: "2019-09-29",
      location: "Boston, MA, USA",
      resp: [
        {
          message:
            "- I was responsible to taking care of the software archithecture and rectruting people that can manage it better for me.",
        },
      ],
    },
  ]);

  // Popover Options Dropdown Menu
  const popover = (
    <Popover style={{ padding: "15px" }}>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() => ToggleSwitchButton(showWork, setShowWork)}
        >
          Show/Hide Section
        </Form.Label>
      </Col>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() => toggleRenameMode(renameWork, setRenameWork)}
        >
          Rename Section Title
        </Form.Label>
      </Col>
    </Popover>
  );

  // TODO: Fix Rename Functionality

  function hideCurrModal(index) {
    const values = [...modals];
    values[index].job = false;
    setModals(values);
  }

  const handleNewJob = (index) => {
    addField(index);
    addJob(modals);
  };

  // Adding additional job field
  const addField = (index) => {
    const jobs = [...modals, { job: false }];
    setModals(jobs);
    setValues([
      ...values,
      {
        company: values[index + 1].company,
        position: values[index + 1].position,
        startDate: values[index + 1].startDate,
        endDate: values[index + 1].endDate,
        location: values[index + 1].location,
        resp: values[index + 1].resp,
      },
    ]);
  };

  return (
    // The whole section row as displayed in the Control Panel
    <Row>
      <Card>
        <Row className="my-3">
          <Col
            md={10}
            className="d-flex justify-content-start align-items-center"
          >
            <Form.Label className="cp-work-styling ms-2">
              {renameWork.isInEditMode
                ? renderEditView(
                    renameWork.value,
                    setRenameWork,
                    ".section-titles-work"
                  )
                : renameWork.value}
            </Form.Label>
          </Col>
          <Col md={2} className="d-flex justify-content-end align-items-center">
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom-start"
              overlay={popover}
            >
              <Form.Label className="optionsStyle p-1">
                <FiMoreVertical />
              </Form.Label>
            </OverlayTrigger>
          </Col>

          {showWork
            ? toggleCurrModal(showWork, "work")
            : toggleCurrModal(showWork, "work")}
        </Row>
        <Col>
          {modals.map((section, index) => {
            return (
              <div key={index}>
                <Row className="mb-2">
                  <Col md={6} className="d-flex justify-content-start">
                    <Form.Label
                      className="items-styling my-2 ms-4"
                      onClick={() => showModalz(index, modals, setModals)}
                    >
                      Job {index + 1}
                    </Form.Label>
                  </Col>

                  <Col md={6} className="d-flex justify-content-end">
                    <Form.Label
                      className="items-styling mt-2 me-3"
                      onClick={() => handleNewJob(index)}
                    >
                      <AiOutlinePlus />
                    </Form.Label>
                    <Form.Label
                      className="items-styling mt-2 me-3"
                      onClick={() => removeField(modals, setModals, index)}
                    >
                      <AiOutlineMinus />
                    </Form.Label>
                  </Col>
                </Row>
                <ModalWork
                  show={modals[index].job}
                  onHide={() => hideCurrModal(index)}
                  jobcount={index}
                  modals={modals}
                  values={values}
                  setValues={setValues}
                  i={index}
                />
              </div>
            );
          })}
        </Col>
      </Card>
    </Row>
  );
}
