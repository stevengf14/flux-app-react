import dispatcher from "../Dispatcher";
import * as ColorAppActions from "../actions/ColorAppActions";
import { EventEmmiter } from "events";

class ColorAppStore extends EventEmmiter {
  constructor() {
    super();

    this.activeColor = "#ff0000";
  }
  handleActions(action) {
    switch (action.type) {
      case ColorAppActions.COLOR_APP_ACTIONS.CHANGE_COLOR: {
        this.activeColor = action.value;
        this.emmit("storeUpdated");
        break;
      }
      default: {
      }
    }
  }
  getActiveColor() {
    return this.activeColor;
  }
}

const colorAppStore = new ColorAppStore();
dispatcher.register(colorAppStore.handleActions.bind(colorAppStore));

export default colorAppStore;
