import React, { useContext } from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";
import { HorizontalLine } from "../../utils/Utils";
import Context from "../../context/Context";
import { formatDate } from "../UIDisplaySections/DisplayFunctions";

function DisplayEducation() {
  // Imported from Context, passed data from the modals in a array of objects' structure
  const { education, name } = useContext(Context);

  return (
    <Row className="educationSection mt-3">
      <Col md={12}>
        <div className="section-titles-education">
          {name.education ? name.education : "Education"}
        </div>
        <HorizontalLine />
      </Col>

      {education.map((curr, index) => {
        return (
          <div key={index}>
            {index !== 0 ? (
              <Col className="col-auto d-flex mt-3">
                <Form.Label className="textStudyField">
                  {curr.degree}
                </Form.Label>
              </Col>
            ) : (
              <Col className="col-auto d-flex">
                <Form.Label className="textStudyField">
                  {curr.degree}
                </Form.Label>
              </Col>
            )}

            <Row className="edu-university">
              <Col className="col-auto pe-0">{curr.university}</Col>
              <Col className="col-auto">
                {curr.ongoing
                  ? formatDate(curr.startDate, "Present")
                  : formatDate(curr.startDate, curr.endDate)}
              </Col>
              <Col className="col-auto ps-0">{curr.location}</Col>
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
