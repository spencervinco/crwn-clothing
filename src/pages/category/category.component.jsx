import React from 'react';
import { connect } from 'react-redux';
import { createSelectorCreator } from 'reselect';

import CollectionItem from '../../components/collection-item/collection-item.component'

import './category.styles.scss';

const CategoryPage = ({ match }) => {
  console.log(match.params.categoryId);
  return (
  <div className='category'>
    <h2>Category Page</h2>
  </div>
)};

export default CategoryPage;
