import { createContext } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const handleClick = () => {
    const modalName = document.querySelector(".modalName");
    console.log(modalName.value);
    let previewName = document.querySelector(".previewName");

    const modalPosition = document.querySelector(".modalPosition");
    let previewPosition = document.querySelector(".previewPosition");

    const modalAddress = document.querySelectorAll(".modalAddress");
    let previewAddress = document.querySelector(".previewAddress");

    const modalEmail = document.querySelector(".modalEmail");
    const previewEmail = document.querySelector(".previewEmail");

    const modalPhone = document.querySelector(".modalPhone");
    const previewPhone = document.querySelector(".previewPhone");

    const modalWebsite = document.querySelector(".modalWebsite");
    const previewWebsite = document.querySelector(".previewWebsite");

    const modalGithub = document.querySelector(".modalGithub");
    const previewGithub = document.querySelector(".previewGithub");

    previewName.textContent = modalName.value;
    previewPosition.textContent = modalPosition.value;
    previewEmail.textContent = modalEmail.value;
    previewPhone.textContent = modalPhone.value;
    previewWebsite.textContent = modalWebsite.value;
    previewGithub.textContent = modalGithub.value;
    document.querySelector(".previewLinkedin").textContent =
      document.querySelector(".modalLinkedin").value;

    // Icon displaying with text
    const emailIcon = document.querySelector(".emailIcon");
    const addressIcon = document.querySelector(".addressIcon");
    const phoneIcon = document.querySelector(".phoneIcon");
    const websiteIcon = document.querySelector(".websiteIcon");
    const githubIcon = document.querySelector(".githubIcon");
    const linkedinIcon = document.querySelector(".linkedinIcon");

    if (modalEmail.value === "") {
      emailIcon.classList.add("d-none");
    } else emailIcon.classList.remove("d-none");

    if (phoneIcon.value === "") {
      phoneIcon.classList.add("d-none");
    } else phoneIcon.classList.remove("d-none");

    if (websiteIcon.value === "") {
      websiteIcon.classList.add("d-none");
    } else websiteIcon.classList.remove("d-none");

    if (githubIcon.value === "") {
      githubIcon.classList.add("d-none");
    } else githubIcon.classList.remove("d-none");

    if (linkedinIcon.value === "") {
      linkedinIcon.classList.add("d-none");
    } else linkedinIcon.classList.remove("d-none");

    // Display all the info with a comma after each one
    if (previewAddress.textContent === "") {
      addressIcon.classList.remove("d-none");
      console.log(addressIcon);
      displayAddress(modalAddress, previewAddress);
    } else {
      previewAddress.textContent = "";
      addressIcon.classList.remove("d-none");
      displayAddress(modalAddress, previewAddress);
    }
  };

  function displayAddress(readFrom, writeTo) {
    readFrom.forEach((current, key, arr) => {
      if (Object.is(arr.length - 1, key)) {
        writeTo.textContent += current.value;
      } else writeTo.textContent += current.value + ", ";
    });
  }

  return (
    <Context.Provider
      value={{
        handleClick,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
