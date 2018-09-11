import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.css";
import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
