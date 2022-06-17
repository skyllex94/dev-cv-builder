import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [change, setChange] = useState("Kamen Kanchev from Context");
  const [name, setName] = useState();

  const [click, setClick] = useState();

  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleClick = () => {
    const textfield = document.querySelector(".textName").value;
    console.log(textfield);
    setClick(textfield);
  };

  return (
    <Context.Provider value={{ change, handleName, handleClick, setClick }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
