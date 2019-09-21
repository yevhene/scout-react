import React from 'react'

import RequestControl from '../components/RequestControl'

const withRequestControl = (Component) => ({ requestStatus, ...otherProps }) =>
  <RequestControl requestStatus={requestStatus}>
    <Component {...otherProps} />
  </RequestControl>

export default withRequestControl
