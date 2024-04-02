import React from "react";
import "./ButtonBox.css";
import * as ColorAppActions from "../actions/ColorAppActions";

function ButtonBox() {
  const buttonClick = (color) => {
    ColorAppActions.changeColor(color);
  };
  return (
    <div className="ButtonBox">
      <button onClick={(event) => buttonClick("#ff0000")}>Red</button>
      <button onClick={(event) => buttonClick("#00ff00")}>Green</button>
    </div>
  );
}

export default ButtonBox;
