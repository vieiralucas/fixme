import { LOGIN_SUCCESS, LOGIN_FAILURE } from './Login'

import firebase from '../services/firebase'
import github from '../services/github'

export const startLogin = () => dispatch => {
  firebase.auth()
    .then(user => {
      github.authenticate(user.token)

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
