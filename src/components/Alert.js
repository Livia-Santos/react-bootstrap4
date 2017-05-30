import React from 'react';

export const Alert = ({alertType="info"}) => (
  <div className={`alert alert-${alertType}`} role="alert">
    <strong>Well done!</strong> You successfully read this important alert message.
  </div>
)
