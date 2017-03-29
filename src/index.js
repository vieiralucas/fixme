import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Root store={store} history={history}>
    <App />
  </Root>,
  document.getElementById('root')
)
