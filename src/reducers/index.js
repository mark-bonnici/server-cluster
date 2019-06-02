import { combineReducers } from "redux"
import servers from "./servers"
import apps from "./apps"

export default combineReducers({
  servers,
  apps
})
