import shortid from "shortid";

import { useNavigate } from "react-router";
import { routing } from "../../common/routing";

import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";

const PostAddForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();

    const formData = new FormData(document.querySelector('#add-form'));
    formData.append('id', shortid());

    let payload = {};

    for (const [key, value] of formData) {
      payload[key] = value;
    }

    dispatch(addPost(payload));

    navigate(routing.home);
  };

  return (
    <form id='add-form' onSubmit={submitHandler}>
      <label htmlFor='title'>Title</label><br/>
      <input id='title' name='title' type='text'/><br/>
      <label htmlFor='author'>Author</label><br/>
      <input id='author' name='author' type='text'/><br/>
      <label htmlFor='pablished'>Pablished</label><br/>
      <input id='pablished' name='publishedDate' type='text'/><br/>

      <label htmlFor='short-desc'>Short description</label><br/>
      <textarea id='short-desc' name='shortDescription' rows='4' /><br/>
      <label htmlFor='main-content'>Main content</label><br/>
      <textarea id='main-content' name='content' rows='4' /><br/>

      <button type='submit'>Add Post</button>
    </form>
  )
}

export default PostAddForm;