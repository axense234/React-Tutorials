import { configureStore } from "@reduxjs/toolkit";
// Reducer
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
