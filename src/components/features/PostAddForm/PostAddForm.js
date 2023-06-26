import shortid from "shortid";

import PostForm from "../PostForm/PostForm";

import { useNavigate } from "react-router";
import { routing } from "../../common/routing";

import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";

const PostAddForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();

    const formData = new FormData(document.querySelector('#post-form'));
    formData.append('id', shortid());

    let payload = {};

    for (const [key, value] of formData) {
      payload[key] = value;
    }

    dispatch(addPost(payload));

    navigate(routing.home);
  };

  return (
    <PostForm submitHandler={submitHandler} />
  )
}

export default PostAddForm;