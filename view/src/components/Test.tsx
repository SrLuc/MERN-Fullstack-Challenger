import { useState } from "react";

const Test = () => {
  const [state, setState] = useState("initial");

  const handleClick = () => {
    setState("clicked");
  };

  return (
    <>
      <button style={{ backgroundColor: "red" }} onClick={handleClick}>
        Click me {state}
      </button>
    </>
  );
};

export default Test;
