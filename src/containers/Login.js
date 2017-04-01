import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Logo from '../components/Logo'
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

    return (
      <div className='login'>
        <Logo className='login-logo'/>
        <div className='login-btn-wrapper'>
          <button onTouchTap={actions.startLogin} className='login-btn'>
            Sign In with GitHub
          </button>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  user: React.PropTypes.object,
  error: React.PropTypes.object
}

const mapStateToProps = state => ({
  user: state.user.profile,
  error: state.user.error
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
