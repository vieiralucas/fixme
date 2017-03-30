import React from 'react'

import logo from './logo.png'

const Logo = ({ className }) => <img src={logo} className={className} />

Logo.propTypes = {
  className: React.PropTypes.string
}

export default Logo
