import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.css";
import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
