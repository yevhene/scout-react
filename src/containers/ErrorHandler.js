import React from 'react'
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

const mapStateToProps = ({ global: { error } }) => ({ error })

const mapDispatchToProps = (dispatch) => ({
  resetError() {
    dispatch(resetError())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler)
