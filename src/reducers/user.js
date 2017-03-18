import { USER_LOGIN } from '../actions'
const initialUser = null

const user = (state = initialUser, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.user
    default:
      return state
  }
}

export default user
