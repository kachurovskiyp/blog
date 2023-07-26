export const makeEditLink = (id) => `/post/edit/${id}`;

export const makePostLink = (id) => `/post/${id}`;

export const routing = {
  home: '/',
  about: '/about',
  post: '/post/:id',
  postAdd: '/post/add',
  postEdit: '/post/edit/:id',
  categories: 'categories',
  category: '/category/:category'
}