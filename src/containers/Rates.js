import React from 'react'
import { connect } from 'react-redux'

import withRequestControl from '../lib/withRequestControl'

export const Rates = withRequestControl(({ rates = {} }) =>
  <table>
    <thead>
      <tr><th>Currency</th><th>Rate</th></tr>
    </thead>
    <tbody>
      {Object.entries(rates).map(([currency, rate]) =>
        <tr key={currency}><td>{currency}</td><td>{rate}</td></tr>
      )}
    </tbody>
  </table>
)

const mapStateToProps = ({ rates: { data: { rates }, requestStatus } }) => ({
  rates, requestStatus
})

export default connect(mapStateToProps)(Rates)
