import React, { Component } from "react";
import "./Box.css";
import ColorAppStore from "../stores/ColorAppStore";
class Box extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      color: ColorAppStore.getActiveColor(),
    };
  }

  componentDidMount() {
    ColorAppStore.on("storeUpdated", this.updateColor);
  }

  componentWillUnmount() {
    ColorAppStore.removeListener("storeUpdated", this.updateColor);
  }

  updateColor = () => {
    this.setState({
      color: ColorAppStore.getActiveColor,
    });
  };

  render() {
    <div className="Box">
      <div
        className="color-container"
        style={{ backgroundColor: this.state.color }}
      ></div>
    </div>;
  }
}

export default Box;
