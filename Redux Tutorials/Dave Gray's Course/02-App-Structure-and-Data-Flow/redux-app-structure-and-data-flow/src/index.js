import React from "react";
import { createRoot } from "react-dom/client";
// Redux
import { Provider } from "react-redux";
import store from "./app/store";
import { fetchUsers } from "./features/users/usersSlice";
// Main App
import Main from "./Main";
// Styles
import "./styles.css";
// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

store.dispatch(fetchUsers());

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<Main></Main>} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
