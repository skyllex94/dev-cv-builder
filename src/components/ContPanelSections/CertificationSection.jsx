import React, { useState, useContext, useEffect } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

import Popover from "react-bootstrap/esm/Popover";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import ModalCertification from "../InputModals/ModalCertification";
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

export default function CertificationSection() {
  // Show modal state
  const [showCertification, setShowCertification] = useState(true);
  // Rename section title state
  const [renameCertification, setRenameCertification] = useState({
    value: "Certifications & Licenses",
    isInEditMode: false,
  });

  // Fetch data from localStorage
  const data = JSON.parse(window.localStorage.getItem("Certification"));
  const { displayCertification, renameSection } = useContext(Context);

  // Array of all certification modals
  const [modals, setModals] = useState([{ display: false }]);

  // A simple value instance to be used when adding new values of populating the first value
  const valueInstance = {
    certification: "Harvard CS50 Certification",
    issuedBy: "EdX Harvard Courses",
    startDate: "2014-05-29",
    endDate: "2019-09-29",
    accomplishments: [
      {
        message:
          "- Took the course with a completion rate of less than 2%, and completed it in less than the designated time period.",
      },
    ],
  };

  // Array of all certification values that is passed in Context, fetched in localStorage and used to display all the info
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
      displayCertification(data);
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

  // Add new certification valueSet and modal
  const addNewCertification = () => {
    const addedValue = [...values, valueInstance];
    updateDisplayingCertification(addedValue);

    const addModal = [...modals, { display: false }];
    setModals(addModal);
  };

  // Remove selected certification
  const removeCertification = (index) => {
    if (values.length > 1) {
      const updatedValues = [...values];
      updatedValues.splice(index, 1);
      updateDisplayingCertification(updatedValues);

      const updatedModals = [...modals];
      updatedModals.splice(index, 1);
      setModals(updatedModals);
    }
  };

  // Update the values state, pass data to Context API and update it in localStorage
  function updateDisplayingCertification(updatedValues) {
    setValues(updatedValues);
    displayCertification(updatedValues);
    updateValuesInLocalStorage(updatedValues, "Certification");
  }

  // Popover Options Dropdown Menu
  const popover = (
    <Popover style={{ padding: "15px" }}>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() =>
            ToggleSwitchButton(showCertification, setShowCertification)
          }
        >
          Show/Hide Section
        </Form.Label>
      </Col>
      <Col md={12}>
        <Form.Label
          className="optionItems p-1"
          onClick={() =>
            toggleRenameMode(renameCertification, setRenameCertification)
          }
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
            {renameCertification.isInEditMode ? (
              <Form.Label
                className="items-styling ms-2"
                onClick={() =>
                  renameSection("certification", renameCertification.value)
                }
              >
                {renderEditView(
                  renameCertification.value,
                  setRenameCertification,
                  ".section-titles-certification"
                )}
              </Form.Label>
            ) : (
              <Form.Label className="items-styling ms-2">
                {renameCertification.value}
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
          {showCertification
            ? toggleCurrModal(showCertification, "certification")
            : toggleCurrModal(showCertification, "certification")}
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
                      Certification {index + 1}
                    </Form.Label>
                  </Col>

                  <Col md={6} className="d-flex justify-content-end">
                    <Form.Label
                      className="items-styling mt-2 me-3"
                      onClick={() => addNewCertification()}
                    >
                      <AiOutlinePlus />
                    </Form.Label>
                    <Form.Label
                      className="items-styling mt-2 me-3"
                      onClick={() => removeCertification(index)}
                    >
                      <AiOutlineMinus />
                    </Form.Label>
                  </Col>
                </Row>
                <ModalCertification
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
