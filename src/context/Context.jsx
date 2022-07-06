import { createContext, useRef } from "react";

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

    // Check if values of the address fields is empty or not
    let isAddressFieldsEmpty = true;
    modalAddress.forEach((current) => {
      if (current.value !== "") {
        isAddressFieldsEmpty = false;
      }
    });

    hideModal();

    // Display all the address info with a comma after each one
    if (!isAddressFieldsEmpty) {
      textAddress.textContent = "";
      document.querySelector(".address").classList.remove("d-none");
      displayAddress(modalAddress, textAddress);
    } else {
      textAddress.textContent = "";
      document.querySelector(".address").classList.add("d-none");
    }
  };

  // display each piece of data
  function displayAddress(readFrom, writeTo) {
    readFrom.forEach((current, key, arr) => {
      if (Object.is(arr.length - 1, key)) {
        writeTo.textContent += current.value;
      } else writeTo.textContent += current.value + ", ";
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

  return (
    <Context.Provider
      value={{
        displayGeneralInfo,
        displaySummary,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
