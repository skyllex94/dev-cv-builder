import React, { useContext } from "react";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";
import { HorizontalLine } from "../../utils/Utils";
import Context from "../../context/Context";

function DisplayWork() {
  const { arrOfJobs } = useContext(Context);
  const { workAttributes } = useContext(Context);

  function displayWork(attr) {
    const { hideModal, index, allValues } = attr;

    const { company, position, startDate, endDate, location, resp } = allValues;

    const displayWholeSection = document.querySelector(".work");
    displayWholeSection.classList.remove("d-none");
    const workDisplay = document.querySelector(".workField" + index);

    workDisplay.classList.remove("d-none");

    const textCompany = document.querySelector(".textCompany" + index);
    console.log(document.querySelector(".textCompany" + index));

    const textWorkPosition = document.querySelector(
      ".textWorkPosition" + index
    );

    // const workPosition = document.querySelector(".workPosition" + index);

    textCompany.textContent = company;
    textWorkPosition.textContent = position;

    const textWorkStartDate = document.querySelector(
      ".textWorkStartDate" + index
    );
    const textWorkEndDate = document.querySelector(".textWorkEndDate" + index);

    const textWorkLocation = document.querySelector(
      ".textWorkLocation" + index
    );

    // Format date string to display only written month and numeric year
    if (startDate === "" && endDate === "") {
      document.querySelector(".work-period" + index).classList.add("d-none");
    } else {
      document.querySelector(".work-period" + index).classList.remove("d-none");
      const formatStart = startDate.replaceAll("-", " ");
      const formatEnd = endDate.replaceAll("-", " ");
      console.log(formatEnd);
      let start = new Date(formatStart);
      let end = new Date(formatEnd);
      let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(start);
      let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(start);
      let ye2 = new Intl.DateTimeFormat("en", { year: "numeric" }).format(end);
      let mo2 = new Intl.DateTimeFormat("en", { month: "short" }).format(end);
      textWorkStartDate.textContent = `${mo}, ${ye}`;
      console.log(textWorkEndDate, ye2, mo2);
      textWorkEndDate.textContent = `${mo2}, ${ye2}`;
    }

    // Populate the Work Address with commas after each of them
    textWorkLocation.textContent = "";
    if (location !== "") {
      document
        .querySelector(".work-location-group" + index)
        .classList.remove("d-none");
      textWorkLocation.textContent = location;
    } else {
      document
        .querySelector(".work-location-group" + index)
        .classList.add("d-none");
    }

    hideModal();

    const group = document.querySelector(".work-resp" + index);
    removeAllChildNodes(group);

    resp.map((response) => {
      const paragraph = document.createElement("p");
      paragraph.className = "mb-0";

      if (response.message !== "") {
        paragraph.classList.remove("d-none");
        paragraph.textContent = response.message;
        group.appendChild(paragraph);
      }
    });
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  const display = (att) => {
    console.log(att);
  };

  return arrOfJobs.map((job, index) => {
    return (
      <Row id="workSection" key={index}>
        {index + 1 === 1 ? (
          <Col md={12}>
            <div className="section-titles-work mt-3">Work Experience</div>
            <HorizontalLine />
          </Col>
        ) : null}
        <button onClick={() => displayWork(workAttributes[index])}>
          DisplayWork
        </button>
        <div
          key={index}
          className={"d-none pt-2 workField" + (index + 1)}
          id="workField"
        >
          <Col md={12} className="d-flex">
            <Form.Label className={"textCompany" + (index + 1)}></Form.Label>
          </Col>

          <Col className="col-auto work-position d-flex">
            <div className={"me-2 textWorkPosition" + (index + 1)} />
            <div className={"d-none d-flex work-period" + (index + 1)}>
              | <div className={"ms-2 me-1 textWorkStartDate" + (index + 1)} />{" "}
              -
              <div className={"me-2 ms-1 textWorkEndDate" + (index + 1)} />
            </div>
            <Col className={"d-flex d-none work-location-group" + (index + 1)}>
              |
              <div className={"ms-2 textWorkLocation" + (index + 1)} />
              <div className={"ms-2 textWorkLocation" + (index + 1)} />
              <div className={"ms-2 textWorkLocation" + (index + 1)} />
            </Col>
          </Col>

          <Col xs={12} className={"work-resp" + (index + 1)}>
            <div className={"textResponsibilities" + (index + 1)}></div>
          </Col>
        </div>
      </Row>
    );
  });
}

export default DisplayWork;

// useLayoutEffect(() => {
//   amountOfJobs.map((job) => {
//     const textCompany = document.querySelector(".textCompany" + (index + 1));
//     const textWorkPosition = document.querySelector(".textWorkPosition");

//     const data = JSON.parse(window.localStorage.getItem("Work"));

//     if (data != null) {
//       document
//         .querySelector(".workField" + (index + 1))
//         .classList.remove("d-none");
//       displayData(data.company, textCompany);
//     }
//   });
// }, []);

// function displayData(data, UIElement) {
//   if (data !== "") {
//     console.log(UIElement);
//     UIElement.textContent = data;
//   }
// }
