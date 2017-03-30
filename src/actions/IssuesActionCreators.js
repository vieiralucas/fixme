import {
  FETCH_ISSUES_LOADING,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_FAILURE
} from './Issues'

import github from '../services/github'

export const fetchIssues = () => dispatch => {
  dispatch({
    type: FETCH_ISSUES_LOADING
  })

  github.issues()
    .then(issues => {
      dispatch({
        type: FETCH_ISSUES_SUCCESS,
        issues
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_ISSUES_FAILURE,
        err
      })
    })
}
