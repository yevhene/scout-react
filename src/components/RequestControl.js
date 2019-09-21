import React from 'react'

const RequestControl = ({ requestStatus, children }) => {
  if (requestStatus.error) {
    return <h3>Error: {requestStatus.error}</h3>
  } else if (requestStatus.isLoading) {
    return <h3>Loading ...</h3>
  } else {
    return children
  }
}

export default RequestControl
