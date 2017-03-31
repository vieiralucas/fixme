import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/Login'

import github from '../services/github'

const profileFromLocalStorage = () => {
  const stringProfile = localStorage.getItem('profile')

  if (stringProfile) {
    try {
      const profile = JSON.parse(stringProfile)

      github.authenticate(profile.token)

      return profile
    } catch (e) {}
  }

  return null
}


const initialUser = {
  profile: profileFromLocalStorage(),
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
