import { createContext } from "react";
import parse from "html-react-parser";

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

    const resp = document.querySelector(".workResponsibilities");
    const textResp = document.querySelector(".textResponsibilities");

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
    console.log(parse(responsibilities));
    textResp.textContent = parse(responsibilities);
  };

  return (
    <Context.Provider
      value={{
        displayGeneralInfo,
        displaySummary,
        displayWork,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
