import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class FixMe extends Component {
  render() {
    const { user, location } = this.props

    if (!user) {
      return <Redirect to={{
        pathname: '/login',
        state: { from: location }
      }}/>
    }

    return <h1>Welcome, { user.name }</h1>
  }
}

FixMe.propTypes = {
  user: React.PropTypes.object
}


const mapStateToProps = state => ({
  user: state.user.profile
})

const mapDispatchToProps = () => ({ })

export default connect(mapStateToProps, mapDispatchToProps)(FixMe)
