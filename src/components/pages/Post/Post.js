import { Link } from "react-router-dom";
import styles from './Post.module.scss';

import { makePostLink } from "../../common/routing";

const Post = props => {
  const date = new Date(props.post.publishedDate);

   return (
    <article className={styles.post}>
      <h3>{props.post.title}</h3>
      <p><span>Author: </span>{props.post.author}</p>
      <p><span>Published: </span>{date.toLocaleDateString()}</p>
      <p><span>Category: </span>{props.post.category}</p>
      <p className={styles.desc}>{props.post.shortDescription}</p>
      <Link to={makePostLink(props.post.id)} className="btn btn-primary">Read more</Link>
    </article>
  )
}

export default Post;