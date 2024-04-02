import "./ButtonBox.css";
import * as ColorAppActions from "../actions/ColorappActions";
import colorappStore from "../stores/ColorappStore";

function ButtonBox() {
  return (
    <div className="ButtonBox">
      <button>Red</button>
      <button>Green</button>
    </div>
  );
}

export default ButtonBox;
