import { combineReducers } from 'redux'

import global from './global'
import rates from './rates'

export default combineReducers({
  global,
  rates
})
