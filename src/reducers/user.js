import { LOGIN_SUCCESS } from '../actions/Login'

const initialUser = null

const user = (state = initialUser, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.user
    default:
      return state
  }
}

export default user
