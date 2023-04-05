import React from "react";
import ReactDom from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./Components/App.jsx";

/**
 *  import "./index.css";
 *  import ReactDom from "react-dom/Client"; //React 18
 *  import reportWebVitals from "./reportWebVitals";
 *  const root = ReactDom.createRoot(document.getElementById("root"));
 */

// const root = ReactDom.createRoot(document.getElementById("root"));
const root = document.getElementById("root");

/**
 *  Here we are using "props" whic means property of react.
 *  Here we are using reusable Custom"Card" component
 *  to List of "Contacts".
 */

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

reportWebVitals();
