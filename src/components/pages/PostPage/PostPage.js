import styles from './PostPage.module.scss';

import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getPostById, deletePost } from '../../../redux/postsRedux';
import { makeEditLink, routing } from '../../common/routing';

import { useState } from 'react';

import Modal from '../../views/Modal/Modal';

const PostPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalActive, setModalActive] = useState(false);

  const { id } = useParams();
  if(!id) navigate(routing.home);

  const post = useSelector(state => getPostById(state, id))[0];
  const date = new Date(post.publishedDate);

  const deleteHandler = () => {
    setModalActive(true);
  }

  const removePost = () => {
    dispatch(deletePost(id));
    setModalActive(false);
    navigate(routing.home);
  };

  return (
    <section className={styles.post}>
      <article>
        <h3>{post.title}</h3>
        <p><span>Author: </span>{post.author}</p>
        <p><span>Published: </span>{date.toLocaleDateString()}</p>
        <p className={styles.desc} dangerouslySetInnerHTML={{ __html: post.content }}></p>
      </article>
      <div>
        <Link className='btn btn-outline-info me-2' to={makeEditLink(post.id)}>Edit</Link>
        <button className='btn btn-outline-danger' onClick={deleteHandler} type='button'>Delete</button>
      </div>

      <Modal active={modalActive} setActive={setModalActive} removePost={removePost}/>

    </section>
  )
};

export default PostPage;