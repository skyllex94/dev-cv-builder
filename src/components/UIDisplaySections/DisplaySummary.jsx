import React, { useLayoutEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import { useLocation } from "react-router-dom";

function DisplaySummary(props) {
  // Template settings
  const location = useLocation();
  const { template } = location.state;

  // Fetch data from localStorage if any, and display the stored values of it in the DOM
  useLayoutEffect(() => {
    // Parse the data before starting to read and use it to populate fields
    const data = JSON.parse(window.localStorage.getItem("Summary"));

    // If any data exists in localStorage, populate it in the DOM
    if (data != null) {
      displayParagraphs(data.paragraphs);
    }
  }, []);

  // Take in data needed, UIClass and DOM element to display the value coming from localStorage
  function displayParagraphs(data) {
    if (data !== "") {
      // Remove the group display-none class
      const paragraphsGroup = document.querySelector(".paragraphsGroup");
      paragraphsGroup.classList.remove("d-none");

      // Iterate over each data set and create a paragraph element and write the data inside
      data.forEach((dataSet) => {
        const newParagraph = document.createElement("p");
        newParagraph.classList.add("textSummary");
        paragraphsGroup.appendChild(newParagraph);
        newParagraph.textContent = dataSet.paragraph;
      });
    }
  }

  return template === "earth" ? (
    <Row className={props.name + " mt-3 text-start"}>
      <Col md={12} className="paragraphsGroup"></Col>
    </Row>
  ) : template === "venus" ? (
    <Row className={props.name + " mt-3 text-start"}>
      <Col
        md={12}
        className="paragraphsGroup text-white mb-0"
        style={{
          fontStyle: "italic",
          fontSize: 14,
          fontWeight: 300,
        }}
      ></Col>
    </Row>
  ) : null;
}

export default DisplaySummary;
