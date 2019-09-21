import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Modal from '../components/Modal'
import { resetError } from '../actions/global'

export const ErrorHandler = ({ error, resetError, children }) => {
  if (!error) {
    return children()
  }

  return (
    <Modal onClick={resetError}>
      <h3>Error: {error}</h3>
    </Modal>
  )
}

ErrorHandler.propTypes = {
  resetError: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,

  error: PropTypes.string
}

const mapStateToProps = ({ global: { error } }) => ({ error })

const mapDispatchToProps = (dispatch) => ({
  resetError() {
    dispatch(resetError())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler)
