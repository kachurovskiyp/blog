import styles from './PostForm.module.scss';

const PostForm = props => {
  return (
    <form className={styles.form} id='post-form' onSubmit={props.submitHandler}>
      <label htmlFor='title'>Title</label><br />
      <input className="form-control" id='title' name='title' type='text' defaultValue={props.post ? props.post.title : ''} /><br />
      <label htmlFor='author'>Author</label><br />
      <input className="form-control" id='author' name='author' type='text' defaultValue={props.post ? props.post.author : ''} /><br />
      <label htmlFor='pablished'>Pablished</label><br />
      <input className="form-control" id='pablished' name='publishedDate' type='text' defaultValue={props.post ? props.post.publishedDate : ''} /><br />

      <label htmlFor='short-desc'>Short description</label><br />
      <textarea className="form-control" id='short-desc' name='shortDescription' rows='4' defaultValue={props.post ? props.post.shortDescription : ''} /><br />
      <label htmlFor='main-content'>Main content</label><br />
      <textarea className="form-control" id='main-content' name='content' rows='4' defaultValue={props.post ? props.post.content : ''} /><br />

      <button className="btn btn-primary" type='submit'>{props.post ? 'Edit post' : 'Add Post'}</button>
    </form>
  )
}

export default PostForm;