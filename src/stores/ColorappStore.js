import dispatcher from "../Dispatcher";
import * as ColorAppActions from "../actions/ColorappActions";
import { EventEmmiter } from "events";

class ColorappStore extends EventEmmiter {
  constructor() {
    super();
  }
  handleActions(action) {}
}

const colorAppStore = new ColorappStore();
dispatcher.register(colorAppStore.handleActions.bind(colorAppStore));

export default colorAppStore;
