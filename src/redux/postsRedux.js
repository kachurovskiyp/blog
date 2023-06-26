const ADD_POST = 'app/posts/add';
const DELETE_POST = 'app/posts/delete';

export const getAllPosts = ({posts}) => posts;
export const getPostById = ({posts}, id) =>
  posts.filter((post) => post.id === id);

export const addPost = payload => ({type: ADD_POST, payload})
export const deletePost = payload => ({type: DELETE_POST, payload});

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, action.payload];
    case DELETE_POST:
      return statePart.filter(post => post.id !== action.payload);
    default:
      return statePart;
  };
};

export default postsReducer;