import React from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";

export const HorizontalLine = () => (
  <hr
    style={{
      color: "black",
      backgroundColor: "black",
      height: 0.5,
    }}
  />
);

const amountOfJobs = [
  { job: 1 },
  { job: 2 },
  { job: 3 },
  { job: 4 },
  { job: 5 },
];

function DisplayWork() {
  return amountOfJobs.map((job, index) => {
    return (
      <div id="workSection">
        {job.job === 1 ? (
          <Col md={12}>
            <div className="section-titles">Work Experience</div>
            <HorizontalLine />
          </Col>
        ) : null}
        <Row key={index} className={"d-none pt-2 workField" + job.job}>
          <Col md={12} className="d-flex">
            <Form.Label className={"textCompany" + job.job}></Form.Label>
          </Col>

          <Col className="col-auto work-position d-flex">
            <div className={"me-2 textWorkPosition" + job.job} />
            <div className={"d-none d-flex work-period" + job.job}>
              | <div className={"ms-2 me-1 textWorkStartDate" + job.job} />
              <div className={"me-2 ms-1 textWorkEndDate" + job.job} />
            </div>
            <Col className={"d-flex d-none work-location-group" + job.job}>
              |
              <div className={"ms-2 textWorkLocation" + job.job} />
              <div className={"ms-2 textWorkLocation" + job.job} />
              <div className={"ms-2 textWorkLocation" + job.job} />
            </Col>
          </Col>

          <Col xs={12} className={"work-responsibilities" + job.job}>
            <div className={"textResponsibilities" + job.job}></div>
          </Col>
        </Row>
      </div>
    );
  });
}

export default DisplayWork;
