import { createContext, useState } from "react";

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
    let addressIcon = document.querySelector(".addressIcon");

    const modalEmail = document.querySelector(".modalEmail");
    const previewEmail = document.querySelector(".previewEmail");

    previewName.textContent = modalName.value;
    previewPosition.textContent = modalPosition.value;
    previewEmail.textContent = modalEmail.value;

    console.log(addressIcon.classList);

    addressIcon.classList.remove("d-none");

    if (previewAddress.textContent === "") {
      displayAddress(modalAddress, previewAddress);
    } else {
      previewAddress.textContent = "";
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
