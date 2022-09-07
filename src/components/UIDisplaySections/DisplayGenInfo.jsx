import React, { useLayoutEffect } from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";

import { GrLocation } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineLink, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { useLocation } from "react-router-dom";

function DisplayGenInfo(props) {
  // Template settings
  const location = useLocation();
  const { template } = location.state;

  // Fetch data from localStorage if any, and display the stored values of it in the DOM
  useLayoutEffect(() => {
    // DOM element selectors used to place the data output into
    const localStorageName = document.querySelector(".textName");
    const localStoragePosition = document.querySelector(".textPosition");
    const localStorageAddress = document.querySelector(".textAddress");
    const localStorageEmail = document.querySelector(".textEmail");
    const localStoragePhone = document.querySelector(".textPhone");
    const localStorageWebsite = document.querySelector(".textWebsite");
    const localStorageGithub = document.querySelector(".textGithub");
    const localStorageLinkedin = document.querySelector(".textLinkedin");

    // Parse the data before starting to read and use it to populate fields
    const data = JSON.parse(window.localStorage.getItem("GenInfo"));

    // If any data exists in localStorage, populate it in the DOM
    if (data != null) {
      const address =
        data.addressCity + ", " + data.addressState + ", " + data.addressZIP;

      displayValue(data.name, ".name", localStorageName);
      displayValue(data.position, ".position", localStoragePosition);
      displayValue(address, ".address", localStorageAddress);
      displayValue(data.email, ".email", localStorageEmail);
      displayValue(data.phone, ".phone", localStoragePhone);
      displayValue(data.website, ".website", localStorageWebsite);
      displayValue(data.github, ".github", localStorageGithub);
      displayValue(data.linkedin, ".linkedin", localStorageLinkedin);
    }
  }, []);

  // Take in data needed, UIClass and DOM element to display the value coming from localStorage
  function displayValue(data, UIClassName, textField) {
    if (data !== "") {
      document.querySelector(UIClassName).classList.remove("d-none");
      textField.textContent = data;
    }
  }

  return template === "earth" ? (
    <Row className={props.name + " text-start"}>
      <Col className="name col-12 d-flex pt-4 d-none">
        <Form.Label className="textName"></Form.Label>
      </Col>
      <Col className="position col-12 d-flex d-none">
        <Form.Label className="textPosition"></Form.Label>
      </Col>
      <Col className="col-5">
        <Row>
          <Col className="address col-12 d-flex d-none">
            <Form>
              <GrLocation />
              <Form.Label className="ms-1 mb-0 textAddress"></Form.Label>
            </Form>
          </Col>
          <Col className="email col-12 d-flex d-none">
            <Form>
              <BiMailSend />
              <Form.Label className="ms-1 mb-0 textEmail"></Form.Label>
            </Form>
          </Col>
          <Col className="phone col-12 d-flex d-none">
            <Form>
              <FiPhone />
              <Form.Label className="ms-1 mb-0 textPhone"></Form.Label>
            </Form>
          </Col>
        </Row>
      </Col>
      <Col className="col-7">
        <Row>
          <Col className="website col-12 d-flex d-none">
            <Form>
              <AiOutlineLink />
              <Form.Label className="ms-1 mb-0 textWebsite"></Form.Label>
            </Form>
          </Col>
          <Col className="github col-12 d-flex d-none">
            <Form>
              <AiFillGithub />
              <Form.Label className="ms-1 mb-0 textGithub"></Form.Label>
            </Form>
          </Col>
          <Col className="linkedin col-12 d-flex d-none">
            <Form>
              <AiFillLinkedin />
              <Form.Label className="ms-1 mb-0 textLinkedin"></Form.Label>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  ) : template === "venus" ? (
    <Row className={props.name + " text-start"}>
      <Col className="name col-12 pt-1 d-none">
        <Form className="pt-4">
          <Form.Label className="textName text-white"></Form.Label>
        </Form>
      </Col>
      <Col className="position text-white col-12 d-none">
        <Form>
          <Form.Label className="textPosition text-white"></Form.Label>
        </Form>
      </Col>
    </Row>
  ) : null;
}

export default DisplayGenInfo;
