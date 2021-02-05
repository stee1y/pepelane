import { LOGIN, USER } from "../actions/actionType"
const initialState = {
  rights: null
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, rights: action.payLoad}
    case USER:
      return {...state}
    default:
      return state
  }
}