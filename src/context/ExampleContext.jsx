import { createContext, useContext } from "react";
import { useState } from "react";

export const Context = createContext();

export const View = () => {
  const context = useContext(Context);

  function display() {
    console.log(context.user);
  }
  return <button onClick={() => display()}>Print</button>;
};

export function Example() {
  const [user, setUser] = useState({ user: "Kamen" });

  return (
    <Context.Provider value={{ user, setUser }}>
      <View />
    </Context.Provider>
  );
}
