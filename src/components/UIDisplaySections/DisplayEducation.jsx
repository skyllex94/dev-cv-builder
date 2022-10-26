import React, { useContext } from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";
import { HorizontalLine } from "../../utils/Utils";
import Context from "../../context/Context";

function DisplayEducation() {
  // Imported from the passed data from the modals in a array of objects' structure
  const { education, name } = useContext(Context);

  function formatDate(startDate, endDate) {
    const formattedDates = [{ date: "" }, { date: "" }];

    if (startDate && endDate !== "") {
      [startDate, endDate].forEach((date, index) => {
        date = date.replaceAll("-", " ");
        let newDate = new Date(date);
        const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
          newDate
        );
        const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(
          newDate
        );
        formattedDates[index].date = `${mo}, ${ye}`;
      });
    } else {
      return null;
    }

    // Formatted output passed from the array of values and populating it on the page with proper formatting
    const formattedOutputtingDates = (
      <div className="d-flex">
        |<Col className="col-auto ms-3">{formattedDates[0].date}</Col>
        <Col className="col-auto mx-1">-</Col>
        <Col className="col-auto me-3">{formattedDates[1].date}</Col>|
      </div>
    );
    return formattedOutputtingDates;
  }

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
                {formatDate(curr.startDate, curr.endDate)}
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
