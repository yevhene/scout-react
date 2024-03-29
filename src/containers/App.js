import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { requestRates } from '../actions/rates'
import ErrorHandler from './ErrorHandler'
import Rates from './Rates'

export const App = ({ requestRates }) => (
  <section>
    <h1>Exchange Rates</h1>

    <ErrorHandler>{() => <Rates />}</ErrorHandler>

    <button onClick={requestRates}>Load rates</button>
  </section>
)

App.propTypes = {
  requestRates: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  requestRates: () => dispatch(requestRates())
})

export default connect(
  null,
  mapDispatchToProps
)(App)
