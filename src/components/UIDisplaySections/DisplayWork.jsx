import React, { useContext, useEffect } from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";
import { HorizontalLine } from "../../utils/Utils";
import Context from "../../context/Context";

function DisplayWork() {
  const { arrOfJobs } = useContext(Context);

  useEffect(() => {}, [arrOfJobs]);

  return arrOfJobs.map((job, index) => {
    return (
      <Row id="workSection" key={index}>
        {index + 1 === 1 ? (
          <Col md={12}>
            <div className="section-titles-work mt-3">Work Experience</div>
            <HorizontalLine />
          </Col>
        ) : null}
        <div
          key={index}
          className={"d-none pt-2 workField" + (index + 1)}
          id="workField"
        >
          <Col md={12} className="d-flex">
            <Form.Label className={"textCompany" + (index + 1)}></Form.Label>
          </Col>

          <Col className="col-auto work-position d-flex">
            <div className={"me-2 textWorkPosition" + (index + 1)} />
            <div className={"d-none d-flex work-period" + (index + 1)}>
              | <div className={"ms-2 me-1 textWorkStartDate" + (index + 1)} />{" "}
              -
              <div className={"me-2 ms-1 textWorkEndDate" + (index + 1)} />
            </div>
            <Col className={"d-flex d-none work-location-group" + (index + 1)}>
              |
              <div className={"ms-2 textWorkLocation" + (index + 1)} />
              <div className={"ms-2 textWorkLocation" + (index + 1)} />
              <div className={"ms-2 textWorkLocation" + (index + 1)} />
            </Col>
          </Col>

          <Col xs={12} className={"work-resp" + (index + 1)}>
            <div className={"textResponsibilities" + (index + 1)}></div>
          </Col>
        </div>
      </Row>
    );
  });
}

export default DisplayWork;

// useLayoutEffect(() => {
//   amountOfJobs.map((job) => {
//     const textCompany = document.querySelector(".textCompany" + (index + 1));
//     const textWorkPosition = document.querySelector(".textWorkPosition");

//     const data = JSON.parse(window.localStorage.getItem("Work"));

//     if (data != null) {
//       document
//         .querySelector(".workField" + (index + 1))
//         .classList.remove("d-none");
//       displayData(data.company, textCompany);
//     }
//   });
// }, []);

// function displayData(data, UIElement) {
//   if (data !== "") {
//     console.log(UIElement);
//     UIElement.textContent = data;
//   }
// }
