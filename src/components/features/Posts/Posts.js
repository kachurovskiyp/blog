import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";

import Post from "../../pages/Post/Post";

const Posts = () => {
  const allPosts = useSelector(state => getAllPosts(state));
  return (
    <section className="d-flex flex-wrap justify-content-between mt-3">
      {allPosts.map(post => <Post post={post} key={post.id}/>)}
    </section>
  )
};

export default Posts;