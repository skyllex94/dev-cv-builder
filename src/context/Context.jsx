import { createContext } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const displayGeneralInfo = (hideModal) => {
    const modalName = document.querySelector(".modalName");
    const modalPosition = document.querySelector(".modalPosition");
    const modalAddress = document.querySelectorAll(".modalAddress");
    let textAddress = document.querySelector(".textAddress");
    const modalEmail = document.querySelector(".modalEmail");
    const modalPhone = document.querySelector(".modalPhone");
    const modalWebsite = document.querySelector(".modalWebsite");
    const modalGithub = document.querySelector(".modalGithub");
    const modalLinkedin = document.querySelector(".modalLinkedin");

    if (modalName.value !== "") {
      const textName = document.querySelector(".textName");
      document.querySelector(".name").classList.remove("d-none");
      textName.textContent = modalName.value;
    } else {
      document.querySelector(".name").classList.add("d-none");
    }

    if (modalPosition.value !== "") {
      const textPosition = document.querySelector(".textPosition");
      document.querySelector(".position").classList.remove("d-none");
      textPosition.textContent = modalPosition.value;
    } else {
      document.querySelector(".position").classList.add("d-none");
    }

    if (modalEmail.value !== "") {
      const textEmail = document.querySelector(".textEmail");
      document.querySelector(".email").classList.remove("d-none");
      textEmail.textContent = modalEmail.value;
    } else {
      document.querySelector(".email").classList.add("d-none");
    }

    if (modalPhone.value !== "") {
      const textPhone = document.querySelector(".textPhone");
      document.querySelector(".phone").classList.remove("d-none");
      textPhone.textContent = modalPhone.value;
    } else {
      document.querySelector(".phone").classList.add("d-none");
    }

    if (modalWebsite.value !== "") {
      const textWebsite = document.querySelector(".textWebsite");
      document.querySelector(".website").classList.remove("d-none");
      textWebsite.textContent = modalWebsite.value;
    } else {
      document.querySelector(".website").classList.add("d-none");
    }

    if (modalGithub.value !== "") {
      const textGithub = document.querySelector(".textGithub");
      document.querySelector(".github").classList.remove("d-none");
      textGithub.textContent = modalGithub.value;
    } else {
      document.querySelector(".github").classList.add("d-none");
    }

    if (modalLinkedin.value !== "") {
      const textLinkedin = document.querySelector(".textLinkedin");
      document.querySelector(".linkedin").classList.remove("d-none");
      textLinkedin.textContent = modalLinkedin.value;
    } else {
      document.querySelector(".linkedin").classList.add("d-none");
    }

    // Display all the address info with a comma after each one
    if (!populateFilledFields(modalAddress)) {
      textAddress.textContent = "";
      document.querySelector(".address").classList.remove("d-none");
      displayAddress(modalAddress, textAddress);
    } else {
      textAddress.textContent = "";
      document.querySelector(".address").classList.add("d-none");
    }
    hideModal();
  };

  // Check if values of (address) fields is empty or not
  function populateFilledFields(ArrOfValues) {
    let isEmpty = true;
    ArrOfValues.forEach((current) => {
      if (current.value === "") {
        console.log(current);
      } else {
        isEmpty = false;
      }
    });
    return isEmpty;
  }

  // Display each piece of data from the given array
  function displayAddress(readFrom, writeTo) {
    readFrom.forEach((current, key, arr) => {
      if (Object.is(arr.length - 1, key)) {
        writeTo.textContent += current.value;
      } else {
        writeTo.textContent += current.value + ", ";
      }
    });
  }

  const displaySummary = (hideModal) => {
    const textSummary = document.querySelector(".textSummary");
    const modalSummary = document.querySelector(".modalSummary");

    if (modalSummary === "") {
      return 1;
    } else {
      textSummary.textContent = modalSummary.value;
    }
    hideModal();
  };

  // Displaying on the CVPreview Component all of the inputted fields for the work section
  const displayWork = (hideModal, responsibilities, index) => {
    const displayWholeSection = document.querySelector(".work");
    displayWholeSection.classList.remove("d-none");
    const workDisplay = document.querySelector(".workField" + index);
    workDisplay.classList.remove("d-none");

    const textCompany = document.querySelector(".textCompany" + index);
    const workCompany = document.querySelector(".workCompany" + index);

    const textWorkPosition = document.querySelector(
      ".textWorkPosition" + index
    );
    const workPosition = document.querySelector(".workPosition" + index);

    const textWorkStartDate = document.querySelector(
      ".textWorkStartDate" + index
    );
    const workStartDate = document.querySelector(".workStartDate" + index);
    const textWorkEndDate = document.querySelector(".textWorkEndDate" + index);
    const workEndDate = document.querySelector(".workEndDate" + index);

    const textWorkLocation = document.querySelector(
      ".textWorkLocation" + index
    );
    const workLocation = document.querySelectorAll(".workLocation" + index);

    // Format date string to display only written month and numeric year
    if (workStartDate.value === "" && workEndDate.value === "") {
      document.querySelector(".work-period" + index).classList.add("d-none");
    } else {
      console.log(index);
      document.querySelector(".work-period" + index).classList.remove("d-none");
      const formatStart = workStartDate.value.replaceAll("-", " ");
      const formatEnd = workEndDate.value.replaceAll("-", " ");
      let start = new Date(formatStart);
      let end = new Date(formatEnd);
      let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(start);
      let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(start);
      let ye2 = new Intl.DateTimeFormat("en", { year: "numeric" }).format(end);
      let mo2 = new Intl.DateTimeFormat("en", { month: "short" }).format(end);
      textWorkStartDate.textContent = `${mo}, ${ye}`;
      textWorkEndDate.textContent = `${mo2}, ${ye2}`;
    }

    // Populate the Work Address with commas after each of them
    textWorkLocation.textContent = "";
    if (!populateFilledFields(workLocation)) {
      document
        .querySelector(".work-location-group" + index)
        .classList.remove("d-none");
      displayAddress(workLocation, textWorkLocation);
    } else {
      document
        .querySelector(".work-location-group" + index)
        .classList.add("d-none");
    }

    hideModal();
    textCompany.textContent = workCompany.value;
    textWorkPosition.textContent = workPosition.value;

    const group = document.querySelector(".textResponsibilities" + index);
    removeAllChildNodes(group);

    responsibilities.map((response) => {
      const paragraph = document.createElement("p");
      paragraph.className = "mb-0";

      if (response.message !== "") {
        paragraph.classList.remove("d-none");
        paragraph.textContent = response.message;
        group.appendChild(paragraph);
      }
    });
  };

  const displayInlineText = (onHide, itemsArray, UIClassName) => {
    // Remove all prior elements before iterating over array
    const group = document.querySelector("." + UIClassName);
    removeAllChildNodes(group);

    // Create a li for each skill and display it
    itemsArray.map((curr, index) => {
      const element = document.createElement("div");
      if (UIClassName.includes("language")) {
        if (itemsArray.length === index + 1) {
          element.textContent = curr.language;
        } else {
          element.textContent = curr.language + ",";
        }
      } else {
        element.textContent = curr.skill;
      }

      const col = document.createElement("div");
      col.className = "col-auto mb-2";

      // Append the element to the flexible column and append the column to the row
      col.appendChild(element);
      group.appendChild(col);
    });
    onHide();
  };

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  const displayEducation = (hideModal, accomplishments) => {
    const textStudyField = document.querySelector(".textStudyField");
    const educationStudy = document.querySelector(".educationStudy");

    const textUniversity = document.querySelector(".textUniversity");
    const educationGraduated = document.querySelector(".educationGraduated");

    const startDate = document.querySelector(".textEduStartDate");
    const educationStartDate = document.querySelector(".educationStartDate");
    const endDate = document.querySelector(".textEduEndDate");
    const educationEndDate = document.querySelector(".educationEndDate");

    const textEduLocation = document.querySelector(".textEduLocation");
    const educationLocation = document.querySelectorAll(".educationLocation");

    // Format date string to display only written month and numeric year
    if (startDate.value === "" && endDate.value === "") {
      document.querySelector(".edu-period").classList.add("d-none");
    } else {
      document.querySelector(".edu-period").classList.remove("d-none");
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

    // Populate the Education Address with commas after each of them
    textEduLocation.textContent = "";
    if (!populateFilledFields(educationLocation)) {
      document.querySelector(".edu-location-group").classList.remove("d-none");
      displayAddress(educationLocation, textEduLocation);
    } else {
      document.querySelector(".edu-location-group").classList.add("d-none");
    }

    textStudyField.textContent = educationStudy.value;
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

  const displayProjects = (
    hideModal,
    arrUIClasses,
    arrModalValues,
    techUsed,
    highlights
  ) => {
    const previewProjectName = document.querySelector(arrUIClasses[0]);
    const modalProjectName = document.querySelector(arrModalValues[0]);

    const previewPrimaryLanguage = document.querySelector(arrUIClasses[1]);
    const modalPrimaryLanguage = document.querySelector(arrModalValues[1]);

    const previewStartDate = document.querySelector(arrUIClasses[2]);
    const modalStartDate = document.querySelector(arrModalValues[2]);

    const previewEndDate = document.querySelector(arrUIClasses[3]);
    const modalEndDate = document.querySelector(arrModalValues[3]);

    const projectWebsite = document.querySelector(".modalProjectLink");
    const projectGithub = document.querySelector(".modalProjectGithub");

    if (projectWebsite.value === "") {
      document.querySelector(".projectLink").classList.add("d-none");
    } else {
      document.querySelector(".projectLink").classList.remove("d-none");
      document.getElementById("projectLink").href = projectWebsite.value;
    }
    if (projectGithub.value === "") {
      document.querySelector(".prjGithubLink").classList.add("d-none");
      console.log(document.querySelector(".prjGithubLink"));
    } else {
      document.querySelector(".prjGithubLink").classList.remove("d-none");
      document.getElementById("prjGithubLink").href = projectGithub.value;
    }

    // Fetch primary information
    previewProjectName.textContent = modalProjectName.value;
    previewPrimaryLanguage.textContent = modalPrimaryLanguage.value;

    // Format date string to display only written month and numeric year
    if (modalStartDate.value === "" && modalEndDate.value === "") {
      document.querySelector(".project-period").classList.add("d-none");
    } else {
      document.querySelector(".project-period").classList.remove("d-none");
      const formatStart = modalStartDate.value.replaceAll("-", " ");
      const formatEnd = modalEndDate.value.replaceAll("-", " ");
      let start = new Date(formatStart);
      let end = new Date(formatEnd);
      let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(start);
      let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(start);
      let ye2 = new Intl.DateTimeFormat("en", { year: "numeric" }).format(end);
      let mo2 = new Intl.DateTimeFormat("en", { month: "short" }).format(end);
      previewStartDate.textContent = `${mo}, ${ye}`;
      previewEndDate.textContent = `${mo2}, ${ye2}`;
    }

    const groupInsert = document.querySelector(arrUIClasses[4]);
    removeAllChildNodes(groupInsert);

    highlights.map((curr) => {
      const paragraph = document.createElement("p");
      paragraph.className = "mb-0";

      if (curr.message !== "") {
        paragraph.classList.remove("d-none");
        paragraph.textContent = curr.message;
        groupInsert.appendChild(paragraph);
      }
    });

    // Remove all prior elements before iterating over array
    const group = document.querySelector(".techGroup");
    removeAllChildNodes(group);

    // Create a li for each skill and display it
    const techTitle = document.querySelector(".techTitle");
    techUsed.map((curr, index) => {
      const element = document.createElement("div");

      // Append the element to the the column and to the row
      if (techUsed.length - 1 === index) {
        element.textContent = curr.tech;
      } else {
        element.textContent = curr.tech + ",";
      }
      element.className = "techUsedItem d-inline mx-2";
      group.appendChild(element);
    });
    // Check if you have any elements in in the array, if not hide the title
    if (techUsed.length === 0) {
      techTitle.classList.add("d-none");
    } else {
      techTitle.classList.remove("d-none");
    }

    hideModal();
  };

  const displayLanguages = (hideModal, accomplishments) => {
    hideModal();
  };

  return (
    <Context.Provider
      value={{
        displayGeneralInfo,
        displaySummary,
        displayWork,
        displayInlineText,
        displayEducation,
        displayLanguages,
        displayProjects,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
