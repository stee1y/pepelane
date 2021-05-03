// import axios from "axios"
// import { LOGIN, LOGOUT } from "./actionType";


// // export function submitForm() {
// //   return {
// //     type: SUBMIT,
// //     ...state, 
// //   }
// // }

// export function login() {
//   return {
//     type: LOGIN,
//     ...state, 
//   }
// }

// export function fetchVehicles() {

//   return async dispatch => {
//     dispatch(fetchVehiclesStart)

//     try {
//       const respons = await axios.get('https://pepelane-af205-default-rtdb.europe-west1.firebasedatabase.app/api.json')
//       const vehicles = []

//       firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });

//       dispatch(fetchVehiclesSuccess(vehicles))
//     } catch (error) {
//       dispatch(fetchVehiclessError(error))
//     }
//   }
// }

// export function logout() {
//   return {
//     type: LOGOUT,
//     ...state, 
//   }
// }
