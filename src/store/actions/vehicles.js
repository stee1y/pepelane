import axios from "axios"
import { FETCH_VEHICLES_START, FETCH_VEHICLES_SUCCES, FETCH_VEHICLES_ERROR } from "./actionType";


export function fetchVehicles() {

  return async dispatch => {
    dispatch(fetchVehiclesStart)

    try {
      const respons = await axios.get('https://pepelane-af205-default-rtdb.europe-west1.firebasedatabase.app/api.json')
      const vehicles = []

      for (const key in respons.data) {
        const res = respons.data[key]
        vehicles.push({
          description: res.description,
          id: res.id,
          image: res.image,
          name: res.name,
          preview: res.preview,
          rent: res.rent,
          specifications_text: res.specifications_text,
          team_text: res.team_text,
          term_text: res.term_text,
          type: res.type
        })
      }

      dispatch(fetchVehiclesSuccess(vehicles))
    } catch (error) {
      dispatch(fetchVehiclessError(error))
    }
  }
}

export function fetchVehiclesStart() {
  return {
    type: FETCH_VEHICLES_START
  }
}

// export function addVehicle() {
//   return {
//     type: ADD_VEHICLE
//   }
// }

export function fetchVehiclesSuccess(vehicles) {
  return {
    type: FETCH_VEHICLES_SUCCES,
    vehicles
  }
}

export function fetchVehiclessError(error) {
  return {
    type: FETCH_VEHICLES_ERROR,
    error: error
  }
}