import React, { useState } from "react";
import "../../style/homePage/room_code.css";

function JoinGameInput() {
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
    <div className={`room_code_input_container ${inputValue ? "filled" : ""}`}>
      <input
        type="text"
        name="room_code"
        className="room_code "
        id="room_code"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <label className="placeholder">Code de la partie :</label>
    </div>
  );
}

export default JoinGameInput;
