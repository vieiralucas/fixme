import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/Login'

const initialUser = {
  profile: null,
  error: null
}

const user = (state = initialUser, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...initialUser, profile: action.user }
    case LOGIN_FAILURE:
      return { ...initialUser, error: action.err }
    default:
      return state
  }
}

export default user
