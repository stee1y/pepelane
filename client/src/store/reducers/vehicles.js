
// import { FETCH_VEHICLES_START, FETCH_VEHICLES_SUCCES, FETCH_VEHICLES_ERROR } from "../actions/actionType";

// const initialState = {
//   type: '',
//   vehicles: [],
//   loading: false,
//   error: null
// }

// export default function vehiclesList(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_VEHICLES_START:
//       return {...state, loading: true}
//     case FETCH_VEHICLES_SUCCES:
//       return {...state, loading: false, vehicles: action.vehicles}
//     case FETCH_VEHICLES_ERROR:
//       return {...state, loading: false, error: action.error}
//     // case ADD_VEHICLE:
//     //   return {...state}
//     default:
//       return state
//   }
// }