import React, { Component } from 'react'
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles'
export class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true })
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/FOeYt4E.png' />
          <ErrorImageText>Sorry, this page is broken.</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary
