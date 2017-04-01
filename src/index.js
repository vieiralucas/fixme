import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Root from './containers/Root'
import App from './containers/App'
import configureStore from './store/configureStore'

import './index.css'

injectTapEventPlugin()
const store = configureStore()

render(
  <MuiThemeProvider>
    <Root store={store} history={history}>
      <App />
    </Root>
  </MuiThemeProvider>,
  document.getElementById('root')
)
