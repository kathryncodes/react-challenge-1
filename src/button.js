import { useState } from "react";

const ToggleButton = (props) => {
  const [visibility, setVisibility] = useState(false);

  const toggleText = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <button onClick={toggleText}>
        {visibility ? "Hide Text" : "Show Text"}
      </button>
      <p className={visibility ? "visible" : "invisible"}>Toggle this text!</p>
    </>
  );
};

export default ToggleButton;
