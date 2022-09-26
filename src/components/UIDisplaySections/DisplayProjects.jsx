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
        <div>|</div>
      </div>
    );
    return formattedOutputtingDates;
  }

  function displayTechnologies(arrOfTechValues, index) {
    const parentClass = document.querySelector(".techGroup" + index);
    removeAllChildNodes(parentClass);
    // Create a li for each tech and append it to the parent element to display in a group
    arrOfTechValues.forEach((curr) => {
      const li = document.createElement("li");
      li.className = "techUsedItem d-inline mx-2";
      li.textContent = curr.message;
      parentClass.appendChild(li);
    });
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
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
        <Row
          className={"align-items-center projectField" + index}
          id="projectField"
        >
          <Col className="col-3 pe-1 d-flex">
            <Form.Label className={"projectName" + index}>
              {project.project}
            </Form.Label>

            <Col className="d-inline d-flex justify-content-start">
              <Nav.Link
                id={"projectLink" + index}
                className={"d-flex align-items-center projectLink" + index}
                href={project.link}
              >
                <FiExternalLink className="ms-2 me-1" />
              </Nav.Link>
              <Nav.Link
                id={"prjGithubLink" + index}
                className={"d-flex align-items-center rjGithubLink" + index}
                href={project.github}
              >
                <AiFillGithub className="ms-2 me-1" />
              </Nav.Link>
            </Col>
          </Col>

          <Col className="col-9 verticalLine">
            <Col className={"d-flex project-info" + index}>
              <div className={"me-2 projectDesc" + index}>{project.desc}</div>
            </Col>
            <Row className={"project-period" + index}>
              {formatDate(project.startDate, project.endDate)}
            </Row>

            <Row className={"techAlign" + index}>
              <div className={"d-inline techTitle" + index}>
                Technologies Used:
                <div className={"d-inline techGroup" + index}>
                  {displayTechnologies(project.techUsed, index)}
                </div>
              </div>
            </Row>

            <Row className="mb-2">
              <div className={"d-flex project-accomplish" + index}>
                <div className={"projectAccomplishments" + index}></div>
              </div>
            </Row>
          </Col>
        </Row>
      </Row>
    );
  });
}

export default DisplayProjects;
