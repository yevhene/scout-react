import React from 'react'
import { connect } from 'react-redux'

export const Rates = ({ data, isLoading }) => {
  if (isLoading) {
    return <h3>Loading ...</h3>
  } else if (!data) {
    return ''
  }

  return (
    <table>
      <thead>
        <tr><th>Currency</th><th>Rate</th></tr>
      </thead>
      <tbody>
        {Object.entries(data.rates).map(([currency, rate]) =>
          <tr key={currency}><td>{currency}</td><td>{rate}</td></tr>
        )}
      </tbody>
    </table>
  )
}


const mapStateToProps = ({ rates }) => ({ ...rates })

export default connect(mapStateToProps)(Rates)
