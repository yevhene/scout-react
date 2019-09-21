import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'barecss'

import configureStore from './store'
import App from './containers/App'

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)
