import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const handleClick = () => {
    const modalName = document.querySelector(".modalName");
    console.log(modalName.value);
    let previewName = document.querySelector(".previewName");

    const modalPosition = document.querySelector(".modalPosition");
    let previewPosition = document.querySelector(".previewPosition");

    previewName.textContent = modalName.value;
    previewPosition.textContent = modalPosition.value;
  };

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
