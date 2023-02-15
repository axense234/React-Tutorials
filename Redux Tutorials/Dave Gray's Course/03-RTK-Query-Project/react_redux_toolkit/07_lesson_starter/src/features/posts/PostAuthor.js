import {
  selectAllUsers,
  selectUserById,
  selectUserIds,
} from "../users/usersSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PostAuthor = ({ userId }) => {
  const users = useSelector((state) => selectUserIds(state));
  console.log(users);

  let author = { name: "gay" };

  return (
    <span>
      by
      {author ? (
        <Link to={`/user/${userId}`}>{author.name}</Link>
      ) : (
        "Unknown author"
      )}
    </span>
  );
};
export default PostAuthor;
