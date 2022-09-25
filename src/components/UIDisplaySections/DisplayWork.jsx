import React, { useContext } from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";
import { HorizontalLine } from "../../utils/Utils";
import Context from "../../context/Context";

function DisplayWork() {
  const { numOfJobs } = useContext(Context);

  // Format date string to display only written month and numeric year
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
        <div>|</div>
        <div className="ms-2 me-1">{formattedDates[0].date}</div>-
        <div className="me-2 ms-1">{formattedDates[1].date}</div>
        <div>|</div>
      </div>
    );
    return formattedOutputtingDates;
  }

  return numOfJobs.map((job, index) => {
    return (
      <Row id="workSection" key={index}>
        {index === 0 ? (
          <Col md={12}>
            <div className="section-titles-work mt-3">Work Experience</div>
            <HorizontalLine />
          </Col>
        ) : null}

        <div key={index} className={"pt-2 workField" + index} id="workField">
          <Col md={12} className="d-flex">
            <Form.Label className={"textCompany" + index}>
              {job.company}
            </Form.Label>
          </Col>
          <Col className="col-auto work-position d-flex">
            <div className={"me-2 textWorkPosition" + index}>
              {job.position}
            </div>
            <div className={"d-flex work-period" + index}>
              {formatDate(job.startDate, job.endDate)}
            </div>
            <Col className={"d-flex work-location-group" + index}>
              <div className={"ms-2 textWorkLocation" + index}>
                {job.location}
              </div>
            </Col>
          </Col>
          <Col xs={12} className={"work-resp" + index}>
            {job.resp !== undefined
              ? job.resp.map((res, index) => {
                  return (
                    <div key={index} className={"textResponsibilities" + index}>
                      {res.message}
                    </div>
                  );
                })
              : null}
          </Col>
        </div>
      </Row>
    );
  });
}

export default DisplayWork;
