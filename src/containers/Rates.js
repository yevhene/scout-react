import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Rates = ({ data, isLoading }) => {
  if (isLoading) {
    return <h3>Loading ...</h3>
  } else if (!data) {
    return ''
  }

  return (
    <>
      <h4>Base: {data.base}</h4>
      <h5>Date: {data.date}</h5>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data.rates).map(([currency, rate]) => (
            <tr key={currency}>
              <td>{currency}</td>
              <td>{rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

Rates.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool
}

const mapStateToProps = ({ rates }) => ({ ...rates })

export default connect(mapStateToProps)(Rates)
