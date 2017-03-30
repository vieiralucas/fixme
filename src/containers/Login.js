import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as loginActionCreators from '../actions/LoginActionCreators'

class Login extends Component {
  render() {
    const { user, actions, location } = this.props

    if (user) {
      return <Redirect to={{
        pathname: '/',
        state: { from: location }
      }}/>
    }

    return <button onClick={actions.startLogin}>Login</button>
  }
}

Login.propTypes = {
  user: React.PropTypes.object
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(loginActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)