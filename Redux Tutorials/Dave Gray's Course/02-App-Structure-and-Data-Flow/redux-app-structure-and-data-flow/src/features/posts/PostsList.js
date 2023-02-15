import { useSelector, useDispatch } from "react-redux";
import {
  selectPostIds,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postSlice";
import React, { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const orderedPostIds = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "succeded") {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }

  return (
    <section className="posts-section">
      <h2>Posts</h2>
      <div className="posts-section-content">{content}</div>
    </section>
  );
};

export default PostsList;
