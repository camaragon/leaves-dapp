import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import { Web3Provider } from "./Web3Provider";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "white", padding: "40px", fontFamily: "monospace", backgroundColor: "#0CA789", minHeight: "100vh" }}>
          <h1>Something went wrong</h1>
          <pre style={{ whiteSpace: "pre-wrap" }}>{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0CA789",
      green: "#8ED14E",
      darkGreen: "#6DAB7B",
      gold: "#FEEB66",
    },
    common: {
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["EB Garamond", "Nixie One", "Dancing Script"].join(","),
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: "EB Garamond",
          backgroundColor: "#8ED14E",
          fontWeight: "900",
          fontSize: "1rem",
          textShadow: "2px 2px 4px #000000",
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Web3Provider>
        <ReduxProvider store={store}>
          <ThemeProvider theme={theme}>
            <Router>
              <App />
            </Router>
          </ThemeProvider>
        </ReduxProvider>
      </Web3Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
