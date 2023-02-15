import React from "react";
// Posts
import PostsList from "./features/posts/PostsList";
// Add Post Form
import AddPostForm from "./features/posts/AddPostForm";
// Others
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import Layout from "./components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<PostsList></PostsList>}></Route>
        {/* Post Route */}
        <Route path="post">
          <Route index element={<AddPostForm></AddPostForm>}></Route>
          <Route
            path=":postId"
            element={<SinglePostPage></SinglePostPage>}
          ></Route>
          <Route
            path="edit/:postId"
            element={<EditPostForm></EditPostForm>}
          ></Route>
        </Route>
        {/* User Route */}
        <Route path="user">
          <Route index element={<UsersList />}></Route>
          <Route path=":userId" element={<UserPage />}></Route>
        </Route>
        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Route>
    </Routes>
  );
};

export default Main;
