import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme/theme"
import { ThemeProvider } from "styled-components";


ReactDOM.render(
    <Router>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Router>,
    document.getElementById("root")
);
