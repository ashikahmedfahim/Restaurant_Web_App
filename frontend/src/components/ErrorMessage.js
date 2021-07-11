import React from 'react'
import { Container, Alert } from 'react-bootstrap'

const ErrorMessage = ({ variant, message }) => {
  return (
      <Container>
          <Alert variant={variant}>{message}</Alert>
      </Container>
  )
}

ErrorMessage.defaultProps = {
  variant: 'info',
}

export default ErrorMessage
