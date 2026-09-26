import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    // eslint-disable-next-line no-console
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }}>
          <h2 style={{ marginBottom: 12 }}>Something went wrong while rendering this page.</h2>
          <pre style={{ whiteSpace: "pre-wrap", background: "#111827", color: "#f8fafc", padding: 12, borderRadius: 8 }}>{String(this.state.error && this.state.error.toString())}</pre>
          {this.state.info && <pre style={{ whiteSpace: "pre-wrap", marginTop: 12 }}>{this.state.info.componentStack}</pre>}
        </div>
      );
    }

    return this.props.children;
  }
}
