import {
  FETCH_ISSUES_LOADING,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_FAILURE
} from '../actions/Issues'

const initialIssues = {
  data: null,
  error: null,
  loading: false
}

const issues = (state = initialIssues, action) => {
  switch (action.type) {
    case FETCH_ISSUES_LOADING:
      return { ...initialIssues, loading: true }
    case FETCH_ISSUES_SUCCESS:
      return { ...initialIssues, data: action.issues }
    case FETCH_ISSUES_FAILURE:
      return { ...initialIssues, error: action.err }
    default:
      return state
  }
}

export default issues
