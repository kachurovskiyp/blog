import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";

import { editPost} from "../../../redux/postsRedux";
import { routing } from "../../common/routing";

import PostForm from "../PostForm/PostForm";

const PostEditForm = () => {
  const {id} = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const post = useSelector(state => getPostById(state, id))[0];

  const submitHandler = e => {
    e.preventDefault();

    const formData = new FormData(document.querySelector('#post-form'));

    let payload = {};

    for (const [key, value] of formData) {
      payload[key] = value;
    }

    payload.id = id;

    dispatch(editPost(payload));

    navigate(routing.home);
  };

  return (
    <PostForm submitHandler={submitHandler} post={post} />
  )
}

export default PostEditForm;