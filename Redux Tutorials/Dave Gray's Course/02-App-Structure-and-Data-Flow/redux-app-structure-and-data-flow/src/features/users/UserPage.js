import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { selectAllPosts, selectPostsByUser } from "../posts/postSlice";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, userId));
  console.log(userId);

  // Posts
  const postsForUser = useSelector((state) =>
    selectPostsByUser(state, Number(userId))
  );

  console.log(postsForUser);

  // Posts Title
  const postTitles = postsForUser.map((post) => {
    return (
      <li key={post.id}>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </li>
    );
  });

  return (
    <section>
      <h2>{user?.name}</h2>

      <ol>{postTitles}</ol>
    </section>
  );
};

export default UserPage;
