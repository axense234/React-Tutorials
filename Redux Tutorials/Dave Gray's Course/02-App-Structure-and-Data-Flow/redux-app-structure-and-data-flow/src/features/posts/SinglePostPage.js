import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { useParams, Link } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const { title, body, userId, date } = post;

  return (
    <article>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <PostAuthor userId={userId} />
        <TimeAgo timeStamp={date} />
      </p>
      <div className="reactions-container">
        <ReactionButtons post={post}></ReactionButtons>
      </div>
    </article>
  );
};

export default SinglePostPage;
