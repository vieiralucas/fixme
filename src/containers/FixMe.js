import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Loading from '../components/Loading'
import IssuesList from '../components/IssuesList'
import * as issuesActionCreators from '../actions/IssuesActionCreators'

class FixMe extends Component {
  componentWillMount() {
    if (this.props.user === null) {
      return;
    }

    this.props.actions.fetchIssues()
  }

  render() {
    const {
      user,
      issues,
      loading,
      // error,
      location
    } = this.props

    if (!user) {
      return <Redirect to={{
        pathname: '/login',
        state: { from: location }
      }}/>
    }

    return (
      <div>
        <h1>Welcome, { user.name }</h1>
        { loading && <Loading /> }
        { issues && <IssuesList issues={issues} /> }
      </div>
    )
  }
}

FixMe.propTypes = {
  user: React.PropTypes.object,
  issues: React.PropTypes.array,
  error: React.PropTypes.object,
  loading: React.PropTypes.bool
}


const mapStateToProps = state => ({
  user: state.user.profile,
  issues: state.issues.data,
  error: state.issues.error,
  loading: state.issues.loading
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(issuesActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FixMe)
