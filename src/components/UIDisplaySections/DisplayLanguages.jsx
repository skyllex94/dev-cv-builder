import React, { useContext } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { HorizontalLine } from "../../utils/Utils";
import Context from "../../context/Context";

function DisplayLanguages() {
  const { languages, name } = useContext(Context);

  return (
    <Row className="languagesField mt-3">
      <Col md={12}>
        <div className="section-titles-languages">
          {name.language ? name.language : "Languages"}
        </div>
        <HorizontalLine />
      </Col>

      <Col md={12}>
        <Row className="languagesGroup">
          {languages.map((language, index) => {
            return (
              <Col key={index} className="col-auto mb-2">
                {index === languages.length - 1 ? (
                  <div>{language.language}</div>
                ) : (
                  <div>{language.language},</div>
                )}
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
}

export default DisplayLanguages;
