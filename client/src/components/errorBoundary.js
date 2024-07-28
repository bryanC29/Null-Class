// client/src/components/ErrorBoundary.js

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any child components and re-render with error message
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
    // You can also log the error to an error reporting service
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>Please try refreshing the page or contact support.</p>
          {/* Optionally, you can display more details about the error */}
          {/* <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details> */}
        </div>
      );
    }
    // When there's no error, render children as normal
    return this.props.children;
  }
}

export default ErrorBoundary;
