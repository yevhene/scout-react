import React from 'react'

import './Modal.css'

export const Modal = ({ onClick, children }) =>
  <div className="modal-background" onClick={onClick}>
    <div className="modal">
      {children}
    </div>
  </div>

export default Modal
