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
  stateReconciler: autoMergeLevel2,
  blacklist: ['currentItem', 'items']
};
//storage defaults to localStorage
//autoMergeLevel2 will make a copy of the initial states then override only the keys within the object that were persisted.
//Incoming state and initial state are merged rather than overwritten.

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, (applyMiddleware(thunk));

export const persistor = persistStore(store);

//persistStore sets up a listener that will continuously save newly changed state to storage.
//persistReducer is notified of the changes in the store and asynchronously persists it.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
