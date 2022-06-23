import { createContext } from "react";

import { AiOutlineLink, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import { Linkedin, Linkedinn } from "../components/ModalInfoContent";

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

    const modalLinkedin = document.querySelector(".modalLinkedin");

    previewName.textContent = modalName.value;
    previewPosition.textContent = modalPosition.value;
    previewEmail.textContent = modalEmail.value;
    previewPhone.textContent = modalPhone.value;
    previewWebsite.textContent = modalWebsite.value;
    previewGithub.textContent = modalGithub.value;
    console.log(modalLinkedin.value);

    if (modalLinkedin.value !== "") {
      console.log("you in context if statement?");
    }

    const previewLinkedin = document.querySelector(".previewLinkedin");
    previewLinkedin.textContent = modalLinkedin.value;

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

    if (modalPhone.value === "") {
      phoneIcon.classList.add("d-none");
    } else phoneIcon.classList.remove("d-none");

    if (modalWebsite.value === "") {
      websiteIcon.classList.add("d-none");
    } else websiteIcon.classList.remove("d-none");

    if (modalGithub.value === "") {
      githubIcon.classList.add("d-none");
    } else githubIcon.classList.remove("d-none");

    // if (modalLinkedin.value === "") {
    //   linkedinIcon.classList.add("d-none");
    // } else linkedinIcon.classList.remove("d-none");

    // Display all the info with a comma after each one
    if (previewAddress.textContent === "") {
      addressIcon.classList.remove("d-none");
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
