import { createContext } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const handleClick = () => {
    const textfield = document.querySelector(".textName").value;
    console.log(textfield);
    let label = document.querySelector(".nameField");
    label.textContent = textfield;
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
