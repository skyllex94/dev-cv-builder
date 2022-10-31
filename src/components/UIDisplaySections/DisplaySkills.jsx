import React, { useContext } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { HorizontalLine } from "../../utils/Utils";
import Context from "../../context/Context";

function DisplaySkills() {
  const { skills, name } = useContext(Context);

  return (
    <Row className="skillsField skillsSection pt-3">
      <Col md={12}>
        <div className="section-titles-skills">
          {name.skills ? name.skills : "Skills"}
        </div>
        <HorizontalLine />
      </Col>
      <Col md={12}>
        <Row className="skillsGroup">
          {skills.map((skill, index) => {
            return (
              <Col key={index} className="col-auto mb-2">
                <div className="m-0">{skill.skill}</div>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
}

export default DisplaySkills;
