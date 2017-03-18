import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import firebase from './firebase'
import { userLogin } from './actions'

import './index.css'

const store = configureStore()

firebase.auth()
  .then(user => store.dispatch(userLogin(user)))

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
