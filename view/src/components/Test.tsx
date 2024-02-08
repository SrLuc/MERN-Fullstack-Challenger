import { useState } from "react";

const Test = () => {
  const [peopleName, setPeopleName] = useState("Pedro");

  const changeName = (name: string) => {
    return setPeopleName(name);
  };

  return (
    <div>
      <h1>Hello {peopleName}</h1>
      <button onClick={() => changeName("Ruan")}>click here</button>
    </div>
  );
};

export default Test;
