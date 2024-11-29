import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

class Main extends Component {
  render() {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
