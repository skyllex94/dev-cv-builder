import React, { useState, useEffect, useLayoutEffect } from "react";
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

  // Array of all the jobs and its modals
  const [modals, setModals] = useState([{ job: false }]);

  // Updating Context State value when adding/removing job so it can be passed to DisplayWork Component
  const { addJob, removeJob } = useContext(Context);

  // Fetching localStorage data if there is any
  const data = JSON.parse(window.localStorage.getItem("Work"));

  // All values from the inputted fields in the Work Modals, or stored in localStorage
  const [values, setValues] = useState(valueFetching);

  function valueFetching() {
    if (data !== null) {
      return data;
    } else {
      return [
        {
          company: "DXC Tech",
          position: "Front-end Dev",
          startDate: "2019-09-09",
          endDate: "2020-08-02",
          location: "Sofia, Bulgaria",
          resp: [
            {
              message: "- ",
            },
          ],
        },
      ];
    }
  }

  // UseEffect will iterate until the array of values is equal to the array of objects
  // in the modals so it populates all of the modals that are stored in the localStorage
  useEffect(() => {
    console.log(
      "values: " + values.length + " | " + "modals: " + modals.length
    );
    if (values.length !== modals.length) {
      setModals([...modals, { job: false }]);
    }
  }, [modals]);

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

  // Hide the currently opened modal - when it's open, object value changes to true
  function hideCurrModal(index) {
    const values = [...modals];
    values[index].job = false;
    setModals(values);
  }

  // Adding additional job field
  const addNewJob = (index) => {
    const jobs = [...modals, { job: false }];
    setModals(jobs);
    // Pass data to the ContextAPI with the amount of jobs so it can iterate over the all of them
    addJob(values);

    // Add additional object for values for the new job
    setValues([
      ...values,
      {
        company: "DXC Tech",
        position: "Front-end Dev",
        startDate: "2019-09-09",
        endDate: "2020-08-02",
        location: "Sofia, Bulgaria",
        resp: values[index].resp,
      },
    ]);
  };

  // Removing selected job field based on the index of the job
  const removeSelectedJob = (modals, setModals, index) => {
    if (values.length > 1 && values.length - 1 === index) {
      const updatedModals = [...modals];
      console.log(index);
      updatedModals.splice(index, 1);
      setModals(updatedModals);

      const currValues = [...values];
      currValues.splice(index, 1);
      setValues(currValues);

      removeJob(values, index);
      updateValuesInLocalStorage(currValues);
    }
  };

  // Update the data set to include this current modal's data
  const updateValuesInLocalStorage = (values) => {
    window.localStorage.setItem("Work", JSON.stringify(values));
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
                      onClick={() => addNewJob(index)}
                    >
                      <AiOutlinePlus />
                    </Form.Label>
                    <Form.Label
                      className="items-styling mt-2 me-3"
                      onClick={() =>
                        removeSelectedJob(modals, setModals, index)
                      }
                    >
                      <AiOutlineMinus />
                    </Form.Label>
                  </Col>
                </Row>
                <ModalWork
                  show={modals[index].job}
                  onHide={() => hideCurrModal(index)}
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
