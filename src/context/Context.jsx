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

  // Display each piece of data fromt the given array
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
  // TODO: Get and index value and add it with template literal to the classNames to remove the function repeat
  const displayWork = (hideModal, responsibilities) => {
    const textCompany = document.querySelector(".textCompany");
    const workCompany = document.querySelector(".workCompany");

    const textWorkPosition = document.querySelector(".textWorkPosition");
    const workPosition = document.querySelector(".workPosition");

    const textWorkStartDate = document.querySelector(".textWorkStartDate");
    const workStartDate = document.querySelector(".workStartDate");
    const textWorkEndDate = document.querySelector(".textWorkEndDate");
    const workEndDate = document.querySelector(".workEndDate");

    const workLocation = document.querySelectorAll(".workLocation");
    const textWorkLocation = document.querySelector(".textWorkLocation");

    // Format date string to display only written month and numeric year
    if (workStartDate.value === "" && workEndDate.value === "") {
      document.querySelector(".work-period").classList.add("d-none");
    } else {
      document.querySelector(".work-period").classList.remove("d-none");
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
      document.querySelector(".work-location-group").classList.remove("d-none");
      displayAddress(workLocation, textWorkLocation);
    } else {
      document.querySelector(".work-location-group").classList.add("d-none");
    }

    hideModal();
    textCompany.textContent = workCompany.value;
    textWorkPosition.textContent = workPosition.value;
    responsibilities.map((response, index) => {
      const paragraph = document.querySelector(`.text` + index);
      if (response.message !== "") {
        paragraph.classList.remove("d-none");
        paragraph.textContent = response.message;
      }
    });
  };

  const displayWork2 = (hideModal, responsibilities) => {
    const textCompany = document.querySelector(".textCompany2");
    const workCompany = document.querySelector(".workCompany2");

    const textWorkPosition = document.querySelector(".textWorkPosition2");
    const workPosition = document.querySelector(".workPosition2");

    const textWorkStartDate = document.querySelector(".textWorkStartDate2");
    const workStartDate = document.querySelector(".workStartDate2");
    const textWorkEndDate = document.querySelector(".textWorkEndDate2");
    const workEndDate = document.querySelector(".workEndDate2");

    const workLocation = document.querySelectorAll(".workLocation2");
    const textWorkLocation = document.querySelector(".textWorkLocation2");

    // Format date string to display only written month and numeric year
    if (workStartDate.value === "" && workEndDate.value === "") {
      document.querySelector(".work-period2").classList.add("d-none");
    } else {
      document.querySelector(".work-period2").classList.remove("d-none");
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
        .querySelector(".work-location-group2")
        .classList.remove("d-none");
      displayAddress(workLocation, textWorkLocation);
    } else {
      document.querySelector(".work-location-group2").classList.add("d-none");
    }

    hideModal();
    textCompany.textContent = workCompany.value;
    textWorkPosition.textContent = workPosition.value;
    responsibilities.map((response, index) => {
      const paragraph = document.querySelector(`.text` + index + 2);
      if (response.message !== "") {
        paragraph.classList.remove("d-none");
        paragraph.textContent = response.message;
      }
    });
  };

  const displayWork3 = (hideModal, responsibilities) => {
    const textCompany = document.querySelector(".textCompany3");
    const workCompany = document.querySelector(".workCompany3");

    const textWorkPosition = document.querySelector(".textWorkPosition3");
    const workPosition = document.querySelector(".workPosition3");

    const textWorkStartDate = document.querySelector(".textWorkStartDate3");
    const workStartDate = document.querySelector(".workStartDate3");
    const textWorkEndDate = document.querySelector(".textWorkEndDate3");
    const workEndDate = document.querySelector(".workEndDate3");

    const workLocation = document.querySelectorAll(".workLocation3");
    const textWorkLocation = document.querySelector(".textWorkLocation3");

    // Format date string to display only written month and numeric year
    if (workStartDate.value === "" && workEndDate.value === "") {
      document.querySelector(".work-period3").classList.add("d-none");
    } else {
      document.querySelector(".work-period3").classList.remove("d-none");
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
        .querySelector(".work-location-group3")
        .classList.remove("d-none");
      displayAddress(workLocation, textWorkLocation);
    } else {
      document.querySelector(".work-location-group3").classList.add("d-none");
    }

    hideModal();
    textCompany.textContent = workCompany.value;
    textWorkPosition.textContent = workPosition.value;
    responsibilities.map((response, index) => {
      const paragraph = document.querySelector(`.text` + index + 3);
      if (response.message !== "") {
        paragraph.classList.remove("d-none");
        paragraph.textContent = response.message;
      }
    });
  };

  const displaySkills = (onHide, skills) => {
    // Remove all prior elements before iterating over array
    const group = document.querySelector(".skillsGroup");
    removeAllChildNodes(group);

    // Create a li for each skill and display it
    skills.map((curSkill, index) => {
      // TODO: Adding a col element so they can be properly structured
      const element = document.createElement("div");
      element.textContent = curSkill.skill;

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

    hideModal();
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
  };

  return (
    <Context.Provider
      value={{
        displayGeneralInfo,
        displaySummary,
        displayWork,
        displayWork2,
        displayWork3,
        displaySkills,
        displayEducation,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
