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
    <Web3Provider>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </ReduxProvider>
    </Web3Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
