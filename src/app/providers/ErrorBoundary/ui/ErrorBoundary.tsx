import React, { ReactNode } from 'react'

interface ErrorBoundaryProps {
  children?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.log(error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Error from ErrorBoundary! {this.state.error.message}
          <br />
          Something went wrong...
        </h1>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
