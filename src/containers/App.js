import React from 'react'
import { connect } from 'react-redux'

import { requestRates } from '../actions/rates'
import Rates from './Rates'

const App = ({ requestRates }) =>
  <div>
    <h1>Exchange Rates</h1>

    <Rates />

    <button onClick={requestRates}>Load rates</button>
  </div>

const mapDispatchToProps = (dispatch) => ({
  requestRates: () => dispatch(requestRates())
})

export default connect(null, mapDispatchToProps)(App)
