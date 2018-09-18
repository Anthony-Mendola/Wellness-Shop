import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.css";
import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};
//state reconciler merges the incoming state with the initital state
//Automerge skips modifications of state done by the reducer during the rehyrdate action and does a level 2 shallow merge.
//Incoming state and initial state are merged rather than overwritten.

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
