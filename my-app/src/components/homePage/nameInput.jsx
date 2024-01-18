import React, { useState } from "react";
import "../../style/homePage/name_input.css";

function NameInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    if (!inputValue) {
      setInputValue("");
    }
  };

  return (
    <div className={`name_input_container ${inputValue ? "filled" : ""}`}>
      <input
        type="text"
        // name="username"
        id="name_input"
        className="name_input"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <label className="placeholder">Name</label>
    </div>
  );
}

export default NameInput;
