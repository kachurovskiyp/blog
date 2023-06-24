import { Link } from "react-router-dom";
import styles from './Post.module.scss';

const Post = props => {
   return (
    <article className={styles.post}>
      <h3>{props.post.title}</h3>
      <p><span>Author: </span>{props.post.author}</p>
      <p><span>Published: </span>{props.post.publishedDate}</p>
      <p className={styles.desc}>{props.post.shortDescription}</p>
      <Link to={`/post/${props.post.id}`} className="btn btn-primary">Read more</Link>
    </article>
  )
}

export default Post;