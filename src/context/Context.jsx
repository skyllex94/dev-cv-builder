import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  // All states for passing all the values for displaying
  const [genInfo, setGenInfo] = useState([]);
  const [numOfJobs, setNumOfJobs] = useState([]);
  const [numOfProjects, setNumOfProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [education, setEducation] = useState([]);
  const [certification, setCertification] = useState([]);
  const [emptySection, setEmptySection] = useState(false);
  // Renaming state, values to be added if a section title is renamed
  const [name, setName] = useState([]);

  const displayGeneralInfo = (hideModal, allValues) => {
    setGenInfo(allValues);
    hideModal();
  };

  // Check if values of (address) fields are empty or not
  // function populateFilledFields(allValues, textAddress) {
  //   let isEmpty = true;
  //   allValues.forEach((current) => {
  //     if (current === "") {
  //     } else {
  //       isEmpty = false;
  //       // Delete previous value id any
  //       textAddress.textContent = "";
  //     }
  //   });
  //   return isEmpty;
  // }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
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
  const displayEmptySection = (newValue) => {
    setEmptySection(newValue);
  };

  // Displaying all inputted info from the education modals
  const displayEducation = (arrOfValues) => {
    setEducation(arrOfValues);
  };

  // Displaying all inputted info from the project modals
  const displayProjects = (allValues) => {
    setNumOfProjects(allValues);
  };

  // Displaying all inputted info from the certification modals
  const displayCertification = (allValues) => {
    setCertification(allValues);
  };

  const renameSection = (keyName, sectionName) => {
    // To push an object use a wrapping object and spread operator as such
    setName({ ...name, ...{ [keyName]: sectionName } });
  };

  return (
    <Context.Provider
      value={{
        genInfo,
        numOfJobs,
        numOfProjects,
        skills,
        languages,
        education,
        certification,
        name,
        emptySection,
        displayGeneralInfo,
        displaySummary,
        displayWork,
        displayInlineText,
        displayEducation,
        displayProjects,
        displayCertification,
        renameSection,
        displayEmptySection,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
