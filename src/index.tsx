import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import createStore from "./configureStore/configureStore";
import ThemeProviders from "./theme/ThemeProvider";

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProviders>
        <App />
      </ThemeProviders>
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
