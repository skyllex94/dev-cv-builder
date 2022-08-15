import React from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/Nav";
import { HorizontalLine } from "../utils/Utils";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const amountOfProjects = [
  { project: 1 },
  { project: 2 },
  { project: 3 },
  { project: 4 },
  { project: 5 },
];

function DisplayProjects() {
  return amountOfProjects.map((project, index) => {
    return (
      <Row id="projectSection" key={index}>
        {project.project === 1 ? (
          <Col md={12}>
            <div className="section-titles-projects mt-3">
              Personal Projects
            </div>
            <HorizontalLine />
          </Col>
        ) : null}
        <Row className="align-items-center">
          <Col className={" col-3 d-none projectField" + project.project}>
            <Col className="d-inline d-flex">
              <Form.Label className={"projectName" + project.project} />
              <Nav.Link
                id={"projectLink" + project.project}
                className={"d-none projectLink" + project.project}
                href=""
              >
                <FiExternalLink className="mx-1 mt-1" />
              </Nav.Link>
              <Nav.Link
                id={"prjGithubLink" + project.project}
                className={"d-none prjGithubLink" + project.project}
                href=""
              >
                <AiFillGithub className="mx-1 mt-1" />
              </Nav.Link>
            </Col>
          </Col>

          <Col className="col-9">
            <Row>
              <Col className={"d-flex project-info" + project.project}>
                <div className={"me-2 projectDesc" + project.project} />
                <div className={"d-none project-period" + project.project}>
                  <Col className="d-flex">
                    |{" "}
                    <div
                      className={"ms-2 me-1 projectStartDate" + project.project}
                    />{" "}
                    -
                    <div
                      className={"me-2 ms-1 projectEndDate" + project.project}
                    />
                  </Col>
                </div>
              </Col>

              <Row className={"techAlign" + project.project}>
                <div className={"d-inline d-none techTitle" + project.project}>
                  Technologies Used:{" "}
                  <div className={"d-inline techGroup" + project.project}></div>
                </div>
              </Row>

              <Row>
                <div className={"d-flex project-accomplish" + project.project}>
                  <div
                    className={"projectAccomplishments" + project.project}
                  ></div>
                </div>
              </Row>
            </Row>
          </Col>
        </Row>
      </Row>
    );
  });
}

export default DisplayProjects;
