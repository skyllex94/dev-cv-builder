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
  const [languages, setLanguages] = useState([]);
  const [education, setEducation] = useState([]);

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

  // Displaying all the inputted fields from the work modals, passing it to the DisplayWork Component
  const displayWork = (allValues) => {
    setNumOfJobs(allValues);
  };

  const displayInlineText = (arrOfValues, UIClassName) => {
    if (UIClassName === "languages") {
      setLanguages(arrOfValues);
    } else {
      setSkills(arrOfValues);
    }
  };

  // Displaying all inputted info from the education modals
  const displayEducation = (arrOfValues) => {
    setEducation(arrOfValues);
  };

  // Displaying all inputted info from the project modals
  const displayProjects = (allValues) => {
    setNumOfProjects(allValues);
  };

  return (
    <Context.Provider
      value={{
        numOfJobs,
        numOfProjects,
        skills,
        languages,
        education,
        displayGeneralInfo,
        displaySummary,
        displayWork,
        displayInlineText,
        displayEducation,
        displayProjects,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
