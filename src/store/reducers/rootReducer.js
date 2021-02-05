import { combineReducers } from "redux"
import vehiclesList from "./vehicles"
import user from "./login"
import loading from "./loading"


export default combineReducers({
  vehiclesList,
  user,
  // loading
})