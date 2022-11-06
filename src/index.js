import React from "react";
import ReactDOM from "react-dom/client";
import thunk from "redux-thunk";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import reducers from "./redux/reducers";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducers, applyMiddleware(thunk));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
