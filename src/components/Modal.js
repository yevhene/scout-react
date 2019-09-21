import React from 'react'
import PropTypes from 'prop-types'

import './Modal.css'

export const Modal = ({ onClick, children }) => (
  <div className="modal-background" onClick={onClick}>
    <div className="modal">{children}</div>
  </div>
)

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
}

export default Modal
