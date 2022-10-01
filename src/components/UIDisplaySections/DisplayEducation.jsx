import React, { useContext } from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";
import { HorizontalLine } from "../../utils/Utils";
import Context from "../../context/Context";

function DisplayEducation() {
  // Imported from the passed data from the modals in a array of objects' structure
  const { education } = useContext(Context);

  return (
    <Row className="educationSection mt-3">
      <Col md={12}>
        <div className="section-titles-education">Education</div>
        <HorizontalLine />
      </Col>
      {education.map((curr, index) => {
        return (
          <div key={index}>
            <Col className="col-auto eduGroupField">
              <Form.Label className="textStudyField">{curr.degree}</Form.Label>
            </Col>

            <Row className="edu-university">
              <Col className="col-auto textUniversity">{curr.university}</Col>
              <Col className="col-auto textEduStartDate gx-0 ms-3">
                {curr.startDate}
              </Col>
              <Col className="col-auto gx-0 mx-1">-</Col>
              <Col className="col-auto textEduEndDate gx-0">{curr.endDate}</Col>
              <Row className="edu-location-group ">
                <Col className="col-auto textEduLocation">{curr.location}</Col>
              </Row>
            </Row>

            <Col md={12} className="edu-accomplish">
              {curr.accomplishments.map((acc, index) => {
                return (
                  <div key={index} className="textAccomplish">
                    {acc.message}
                  </div>
                );
              })}
            </Col>
          </div>
        );
      })}
    </Row>
  );
}

export default DisplayEducation;
