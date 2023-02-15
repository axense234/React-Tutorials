import { configureStore } from "@reduxjs/toolkit";
// Reducers
import postReducer from "../features/posts/postSlice";
import usersReducer from "../features/users/usersSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer,
  },
});

export default store;
