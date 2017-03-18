import React from 'react'
import { Provider } from 'react-redux'

import DevTools from './DevTools'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <DevTools />
    </div>
  </Provider>
);

export default Root;
