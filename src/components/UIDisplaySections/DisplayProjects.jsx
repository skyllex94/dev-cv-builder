import React, { useContext } from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/Nav";
import { HorizontalLine } from "../../utils/Utils";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import Context from "../../context/Context";

function DisplayProjects() {
  // Array with all the values inputted from the modal, a modal is a single object with all the info
  const { numOfProjects } = useContext(Context);

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
        <div className="me-1">{formattedDates[0].date}</div>-
        <div className="me-2 ms-1">{formattedDates[1].date}</div>
      </div>
    );
    return formattedOutputtingDates;
  }

  // Map out all tech values present, and output them in it's own li elements
  function displayElements(arrOfValues, UIClassName) {
    const output = arrOfValues.map((tech, index) => {
      return (
        <li key={index} className={UIClassName}>
          {tech.message}
        </li>
      );
    });
    return output;
  }

  return numOfProjects.map((project, index) => {
    return (
      <Row id="projectSection" key={index}>
        {index === 0 ? (
          <Col md={12}>
            <div className="section-titles-projects mt-3">
              Personal Projects
            </div>
            <HorizontalLine />
          </Col>
        ) : null}
        <Row className={"align-items-center projectField"}>
          <Col className="col-3 pe-1 d-flex">
            <Form.Label className={"projectName"}>{project.project}</Form.Label>

            <Col className="d-inline d-flex justify-content-start">
              <Nav.Link
                className={"d-flex align-items-center"}
                href={project.link}
              >
                <FiExternalLink className="ms-2 me-1" />
              </Nav.Link>
              <Nav.Link
                className={"d-flex align-items-center"}
                href={project.github}
              >
                <AiFillGithub className="ms-2 me-1" />
              </Nav.Link>
            </Col>
          </Col>

          <Col className="col-9 verticalLine">
            <Col className={"d-flex project-info"}>
              <div className={"me-2 projectDesc"}>{project.desc}</div>
            </Col>
            <Row className={"project-period"}>
              {formatDate(project.startDate, project.endDate)}
            </Row>

            <Row className={"techAlign"}>
              <div className={"d-inline techTitle"}>
                Technologies Used:
                {displayElements(
                  project.techUsed,
                  "techUsedItem d-inline mx-2"
                )}
              </div>
            </Row>

            <Row className="mb-2">
              {displayElements(
                project.highlights,
                "d-inline project-accomplish"
              )}
            </Row>
          </Col>
        </Row>
      </Row>
    );
  });
}

export default DisplayProjects;
