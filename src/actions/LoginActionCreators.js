import { LOGIN_SUCCESS, LOGIN_FAILURE } from './Login'

import firebase from '../firebase'

export const startLogin = () => dispatch => {
  firebase.auth()
    .then(user => {
      dispatch({
        type: LOGIN_SUCCESS,
        user
      })
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        err
      })
    })
}
