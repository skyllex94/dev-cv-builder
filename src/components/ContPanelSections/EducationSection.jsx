import React, { useState, useContext, useEffect } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

import Popover from "react-bootstrap/esm/Popover";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import ModalEducation from "../InputModals/ModalEducation";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import {
  ToggleSwitchButton,
  toggleCurrModal,
  toggleRenameMode,
  renderEditView,
  showModals,
  updateValuesInLocalStorage,
} from "./ContPanelFunctions";
import Context from "../../context/Context";

export default function EducationSection() {
  // Show modal state
  const [showEducation, setShowEducation] = useState(true);
  // Rename section title state
  const [renameEducation, setRenameEducation] = useState({
    value: "Education",
    isInEditMode: false,
  });

  // Fetch data from localStorage
  const data = JSON.parse(window.localStorage.getItem("Education"));
  const { displayEducation } = useContext(Context);

  // Array of all education modals
  const [modals, setModals] = useState([{ display: false }]);

  // A simple value instance to be used when adding new values of populating the first value
  const valueInstance = {
    degree: "Bachelor in Computer Science",
    university: "Economic University - Varna",
    startDate: "2014-05-29",
    endDate: "2019-09-29",
    location: "Varna, Bulgaria",
    accomplishments: [
      {
        message:
          "- Got a GPA of 3.4 in my stay at the university and took additional courses of statistics",
      },
    ],
  };

  // Array of all education values that is passed in Context, fetched in localStorage and used to display all the info
  const [values, setValues] = useState(fetchValues);

  // Fetch valueInstance or data from localStorage if any
  function fetchValues() {
    if (data !== null) {
      return data;
    } else {
      return [valueInstance];
    }
  }

  // Load data from localStorage if any, and passed it after the page renders to the ContextAPI
  useEffect(() => {
    if (data !== null) {
      displayEducation(data);
    }
  }, []);

  // Populate the amount of modals needed to be displayed to equal the amount of valueSets in localStorage
  useEffect(() => {
    if (values.length !== modals.length) {
      const addModal = [...modals, { display: false }];
      setModals(addModal);
    }
  }, [modals]);

  // Hide the currently opened modal
  const hideCurrentModal = (index) => {
    const updatedModals = [...modals];
    updatedModals[index].display = false;
    setModals(updatedModals);
  };

  // Add new Education valueSet and modal
  const addNewEducation = () => {
    const addedValue = [...values, valueInstance];
    updateDisplayingEducation(addedValue);

    const addModal = [...modals, { display: false }];
    setModals(addModal);
  };

  // Remove selected education
  const removeEducation = (index) => {
    if (values.length > 1) {
      const updatedValues = [...values];
      updatedValues.splice(index, 1);
      updateDisplayingEducation(updatedValues);

      const updatedModals = [...modals];
      updatedModals.splice(index, 1);
      setModals(updatedModals);
    }
  };

  // Update the values state, pass data to Context API and update it in localStorage
  function updateDisplayingEducation(updatedValues) {
    setValues(updatedValues);
    displayEducation(updatedValues);
    updateValuesInLocalStorage(updatedValues, "Education");
  }

  // Popover Options Dropdown Menu
  const popover = (
    <Popover style={{ padding: "15px" }}>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() => ToggleSwitchButton(showEducation, setShowEducation)}
        >
          Show/Hide Section
        </Form.Label>
      </Col>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() => toggleRenameMode(renameEducation, setRenameEducation)}
        >
          Rename Section Title
        </Form.Label>
      </Col>
    </Popover>
  );

  return (
    <Row>
      <Card>
        <Row>
          <Col
            md={10}
            className="d-flex justify-content-start align-items-center mt-3"
          >
            {renameEducation.isInEditMode ? (
              <Form.Label className="items-styling  ms-2">
                {renderEditView(
                  renameEducation.value,
                  setRenameEducation,
                  ".section-titles-education"
                )}
              </Form.Label>
            ) : (
              <Form.Label className="items-styling ms-2">
                {renameEducation.value}
              </Form.Label>
            )}
          </Col>
          <Col
            md={2}
            className="d-flex justify-content-end align-items-center mt-3"
          >
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
          {showEducation
            ? toggleCurrModal(showEducation, "education")
            : toggleCurrModal(showEducation, "education")}
        </Row>
        <Col>
          {modals.map((section, index) => {
            return (
              <div key={index}>
                <Row className="mb-2">
                  <Col md={6} className="d-flex justify-content-start">
                    <Form.Label
                      className="items-styling my-2 ms-4"
                      onClick={() => showModals(index, modals, setModals)}
                    >
                      Education {index + 1}
                    </Form.Label>
                  </Col>

                  <Col md={6} className="d-flex justify-content-end">
                    <Form.Label
                      className="items-styling mt-2 me-3"
                      onClick={() => addNewEducation()}
                    >
                      <AiOutlinePlus />
                    </Form.Label>
                    <Form.Label
                      className="items-styling mt-2 me-3"
                      onClick={() => removeEducation(index)}
                    >
                      <AiOutlineMinus />
                    </Form.Label>
                  </Col>
                </Row>
                <ModalEducation
                  show={modals[index].display}
                  onHide={() => hideCurrentModal(index)}
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
