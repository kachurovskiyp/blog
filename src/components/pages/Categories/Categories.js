import styles from './Categories.module.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesReducer';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import shortid from 'shortid';

const Categories = () => {
  const categories = useSelector(state => getAllCategories(state));

  return (
    <React.Fragment>
      <h2>Categories</h2>
      <ul className={styles.categoryList}>
        <li key={shortid()}>
          <Nav.Link as={NavLink} to='/'>all</Nav.Link>
        </li>

        {categories.map(
          category =>
            <li key={shortid()}>
              <Nav.Link as={NavLink} to={`/category/${category}`}>{category}</Nav.Link>
            </li>
        )}
      </ul>
    </React.Fragment>
  )
}

export default Categories;