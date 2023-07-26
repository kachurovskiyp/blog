import styles from './PostForm.module.scss';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useForm } from 'react-hook-form';
import shortid from 'shortid';

import { useNavigate, useParams } from 'react-router';
import { routing } from '../../common/routing';

import { useDispatch, useSelector } from 'react-redux';
import { addPost, editPost, getPostById } from '../../../redux/postsRedux';

import { useRef, useState } from 'react';

const PostForm = ({ role = 'add' }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [contentError, setContentError] = useState(false);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postForm = useRef();

  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id))[0];
  const payload = {};

  const submitHandler = () => {
    const formData = new FormData(postForm.current);

    if (role === 'add') formData.append('id', shortid());

    for (const [key, value] of formData) {
      key === 'publishedDate' ? payload[key] = new Date(value) : payload[key] = value;
    }

    if (role === 'edit') payload.id = id;

    if(payload.content) {
      dispatch(role === 'add' ? addPost(payload) : editPost(payload));
      navigate(routing.home);
    } else {
      setContentError(true);
    }
  };

  const changeEditorHandler = content => {
    payload.content = content;
  };

  return (
    <form ref={postForm} className={styles.form} id='post-form' onSubmit={validate(submitHandler)}>
      <label htmlFor='title'>Title</label>
      <input
        {...register('title', {
          required: 'This field is required',
          minLength: {
            value: 3,
            message: 'Min length is 3 letters'
          }
        })}
        defaultValue={post ? post.title : ''}
        className='form-control' id='title' name='title' type='text'
      />
      {errors.title && <small className='d-block form-text text-danger mt-2'>{errors.title.message}</small>}

      <label htmlFor='author'>Author</label>
      <input
        {...register('author', {
          required: 'This field is required',
          minLength: {
            value: 3,
            message: 'Min length is 3 letters'
          }
        })}
        defaultValue={post ? post.author : ''}
        className='form-control' id='author' name='author' type='text'
      />
      {errors.author && <small className='d-block form-text text-danger mt-2'>{errors.author.message}</small>}

      <label htmlFor='pablished'>Pablished</label>
      <DatePicker name='publishedDate' className='form-control' selected={startDate} onChange={(date) => setStartDate(date)} />


      <label htmlFor='shortDesc'>shortDesc</label>
      <textarea
        {...register('shortDescription', {
          required: 'This field is required',
          minLength: {
            value: 20,
            message: 'Min length is 20 letters'
          }
        })}
        defaultValue={post ? post.shortDescription : ''}
        className='form-control' id='shortDesc' name='shortDescription' rows='3'
      />
      {errors.shortDescription && <small className='d-block form-text text-danger mt-2'>{errors.shortDescription.message}</small>}

      <label htmlFor='main-content'>Main content</label>
      <ReactQuill id='content' theme='snow' value={post ? post.content : ''} onChange={changeEditorHandler} />
      {contentError && <small className='d-block form-text text-danger mt-2'>This field is required</small>}
      <button className='btn btn-primary' type='submit'>{post ? 'Edit post' : 'Add Post'}</button>
    </form>
  )
}

export default PostForm;