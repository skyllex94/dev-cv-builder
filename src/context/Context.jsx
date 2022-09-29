import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  // Template Variable
  const location = useLocation();
  const { template } = location.state;

  // State for fetching number of jobs from the ContPanel & passing
  // it to DisplayWork to iterate over each job and display it
  const [numOfJobs, setNumOfJobs] = useState([]);
  const [numOfProjects, setNumOfProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  const displayGeneralInfo = (hideModal, allValues) => {
    const arrAddressFields = [
      allValues.addressCity,
      allValues.addressState,
      allValues.addressZIP,
    ];

    if (allValues.name !== "") {
      const textName = document.querySelector(".textName");
      document.querySelector(".name").classList.remove("d-none");
      textName.textContent = allValues.name;
    } else {
      document.querySelector(".name").classList.add("d-none");
    }

    if (allValues.position !== "") {
      const textPosition = document.querySelector(".textPosition");
      document.querySelector(".position").classList.remove("d-none");
      textPosition.textContent = allValues.position;
    } else {
      document.querySelector(".position").classList.add("d-none");
    }

    if (allValues.email !== "") {
      const textEmail = document.querySelector(".textEmail");
      document.querySelector(".email").classList.remove("d-none");
      textEmail.textContent = allValues.email;
    } else {
      document.querySelector(".email").classList.add("d-none");
    }

    if (allValues.phone !== "") {
      const textPhone = document.querySelector(".textPhone");
      document.querySelector(".phone").classList.remove("d-none");
      textPhone.textContent = allValues.phone;
    } else {
      document.querySelector(".phone").classList.add("d-none");
    }

    if (allValues.website !== "") {
      const textWebsite = document.querySelector(".textWebsite");
      document.querySelector(".website").classList.remove("d-none");
      textWebsite.textContent = "";
      if (template === "earth") {
        createLink(textWebsite, allValues.website, "earth");
      } else if (template === "venus") {
        createLink(textWebsite, allValues.website, "venus");
      }
    } else {
      document.querySelector(".website").classList.add("d-none");
    }

    if (allValues.github !== "") {
      const textGithub = document.querySelector(".textGithub");
      document.querySelector(".github").classList.remove("d-none");
      textGithub.textContent = "";
      if (template === "earth") {
        createLink(textGithub, allValues.github, "earth");
      } else if (template === "venus") {
        createLink(textGithub, allValues.github, "venus");
      }
    } else {
      document.querySelector(".github").classList.add("d-none");
    }

    if (allValues.linkedin !== "") {
      const textLinkedin = document.querySelector(".textLinkedin");
      document.querySelector(".linkedin").classList.remove("d-none");
      textLinkedin.textContent = "";
      if (template === "earth") {
        createLink(textLinkedin, allValues.linkedin, "earth");
      } else if (template === "venus") {
        createLink(textLinkedin, allValues.linkedin, "venus");
      }
    } else {
      document.querySelector(".linkedin").classList.add("d-none");
    }

    // Truncate the label if it has more than 30 characters
    function truncate(str) {
      return str.length > 30 ? str.substring(0, 27) + "..." : str;
    }

    // Take in the Form.Label which need a link insert, and insert
    //a link to redirect you automatically when clicked
    function createLink(elementToPlacelink, valueToInput, template) {
      const element = document.createElement("a");
      let text;
      if (template === "earth") {
        text = document.createTextNode(valueToInput);
      } else if (template === "venus") {
        text = document.createTextNode(truncate(valueToInput));
      }
      element.setAttribute("href", valueToInput);
      element.className = "disabled";
      element.appendChild(text);
      elementToPlacelink.appendChild(element);
    }

    // Display all the address info with a comma after each one
    const textAddress = document.querySelector(".textAddress");
    if (!populateFilledFields(arrAddressFields, textAddress)) {
      document.querySelector(".address").classList.remove("d-none");
      displayAddress(arrAddressFields, textAddress);
    } else {
      document.querySelector(".address").classList.add("d-none");
    }
    hideModal();
  };

  // Check if values of (address) fields are empty or not
  function populateFilledFields(allValues, textAddress) {
    let isEmpty = true;
    allValues.forEach((current) => {
      if (current === "") {
      } else {
        isEmpty = false;
        // Delete previous value id any
        textAddress.textContent = "";
      }
    });
    return isEmpty;
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  // Display each piece of data from the given array
  function displayAddress(readFrom, writeTo) {
    readFrom.forEach((current, index, arr) => {
      if (Object.is(arr.length - 1, index)) {
        writeTo.textContent += current;
      } else {
        writeTo.textContent += current + ", ";
      }
    });
  }

  // Display Summary function, and create paragraphs for each addition
  const displaySummary = (hideModal, paragraphs) => {
    // Select the paragraph group div
    const paragraphsGroup = document.querySelector(".paragraphsGroup");
    // Clear all previous paragraphs, before updating
    removeAllChildNodes(paragraphsGroup);

    // Populate all the text from the paragraphs
    paragraphs.map((paragraph) => {
      const createParagraph = document.createElement("p");
      createParagraph.className = "textSummary";
      createParagraph.innerText = paragraph.paragraph;
      paragraphsGroup.appendChild(createParagraph);
    });

    hideModal();
  };

  const addJob = (newValueObj) => {
    const values = [...numOfJobs, newValueObj];
    setNumOfJobs(values);
  };

  const removeJob = (index) => {
    const values = [...numOfJobs];
    values.splice(index, 1);
    setNumOfJobs(values);
  };

  // Displaying all the inputted fields from the work modals, passing it to the DisplayWork Component
  const displayWork = (allValues) => {
    setNumOfJobs(allValues);
  };

  const displayInlineText = (arrOfValues) => {
    setSkills(arrOfValues);
    // // Remove all prior elements before iterating over array
    // const group = document.querySelector("." + UIClassName);
    // removeAllChildNodes(group);
    // // Create a li for each skill and display it
    // itemsArray.map((curr, index) => {
    //   const element = document.createElement("div");
    //   if (UIClassName.includes("language")) {
    //     if (itemsArray.length === index + 1) {
    //       element.textContent = curr.language;
    //     } else {
    //       element.textContent = curr.language + ",";
    //     }
    //   } else {
    //     element.textContent = curr.skill;
    //   }
    //   const col = document.createElement("div");
    //   col.className = "col-auto mb-2";
    //   // Append the element to the flexible column and append the column to the row
    //   col.appendChild(element);
    //   group.appendChild(col);
    // });
  };

  const displayEducation = (hideModal, accomplishments) => {
    const textStudyField = document.querySelector(".textStudyField");
    const educationStudy = document.querySelector(".educationStudy");
    // Display education study, d-none by default
    const eduGroupField = document.querySelector(".eduGroupField");

    const textUniversity = document.querySelector(".textUniversity");
    const educationGraduated = document.querySelector(".educationGraduated");

    const startDate = document.querySelector(".textEduStartDate");
    const educationStartDate = document.querySelector(".educationStartDate");
    const endDate = document.querySelector(".textEduEndDate");
    const educationEndDate = document.querySelector(".educationEndDate");

    const textEduLocation = document.querySelector(".textEduLocation");
    const educationLocation = document.querySelector(".educationLocation");

    // Format date string to display only written month and numeric year
    if (startDate.value === "" && endDate.value === "") {
      document.querySelector(".edu-university").classList.add("d-none");
    } else {
      document.querySelector(".edu-university").classList.remove("d-none");
      const formatStart = educationStartDate.value.replaceAll("-", " ");
      const formatEnd = educationEndDate.value.replaceAll("-", " ");
      let start = new Date(formatStart);
      let end = new Date(formatEnd);
      let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(start);
      let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(start);
      let ye2 = new Intl.DateTimeFormat("en", { year: "numeric" }).format(end);
      let mo2 = new Intl.DateTimeFormat("en", { month: "short" }).format(end);
      startDate.textContent = `${mo}, ${ye}`;
      endDate.textContent = `${mo2}, ${ye2}`;
    }

    textEduLocation.textContent = educationLocation.value;
    // Display Degree of Study
    if (educationStudy.value !== "") {
      eduGroupField.classList.remove("d-none");
      textStudyField.textContent = educationStudy.value;
    } else {
      eduGroupField.classList.add("d-none");
    }

    textUniversity.textContent = educationGraduated.value;

    const groupInsert = document.querySelector(".textAccomplish");
    removeAllChildNodes(groupInsert);

    accomplishments.map((curr) => {
      const paragraph = document.createElement("p");
      paragraph.className = "mb-0";

      if (curr.message !== "") {
        paragraph.classList.remove("d-none");
        paragraph.textContent = curr.message;
        groupInsert.appendChild(paragraph);
      }
    });

    hideModal();
  };

  // Displaying all inputted info from the project modals
  const displayProjects = (allValues) => {
    setNumOfProjects(allValues);
  };

  // Add additional project and update the state so it will be passed to DisplayProjects and add a project
  const addProject = (newValueForPopulating) => {
    const values = [...numOfProjects, newValueForPopulating];
    setNumOfProjects(values);
  };

  // Remove currently selected project and update the state, so it will be removed from the DisplayProjects
  const removeProject = (index) => {
    const values = [...numOfProjects];
    values.splice(index, 1);
    setNumOfProjects(values);
  };

  const displayLanguages = (hideModal) => {
    hideModal();
  };

  return (
    <Context.Provider
      value={{
        numOfJobs,
        numOfProjects,
        skills,
        displayGeneralInfo,
        displaySummary,
        displayWork,
        displayInlineText,
        displayEducation,
        displayLanguages,
        displayProjects,
        addJob,
        removeJob,
        addProject,
        removeProject,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
