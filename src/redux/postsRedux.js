//selectors

// actions
// const createActionName = actionName => `app/posts/${actionName}`;

export const getAllPosts = ({posts}) => posts;

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default postsReducer;