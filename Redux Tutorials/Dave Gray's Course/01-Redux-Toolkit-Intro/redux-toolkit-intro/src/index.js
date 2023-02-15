import React from "react";
import { createRoot } from "react-dom/client";
// Main
import Main from "./Main";
// Store
import { store } from "./app/store";
import { Provider } from "react-redux";
// Styles
import "./styles.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);
