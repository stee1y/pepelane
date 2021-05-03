import { LOGIN, LOGOUT, USER } from "../actions/actionType"

const initialState = {
  name: null, //'Bessie Cooper'
  avatar: null,
  email: null,
  password: null

}

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, rights: action.payLoad, }
    case LOGOUT:
      return {...state, rights: null, name: null, avatar: null}
    default:
      return state
  }
}