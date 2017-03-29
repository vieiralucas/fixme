import React from 'react'
import { Provider } from 'react-redux'

import DevTools from './DevTools'

const Root = ({ store, children }) => (
  <Provider store={store}>
    <div>
      {children}
      <DevTools />
    </div>
  </Provider>
);

export default Root;
