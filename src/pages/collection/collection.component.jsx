import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from "../../redux/shop/shop.selectors";

import './collection.styles.scss';

const CollectionPage = ({ match, collection }) => {
  console.log(collection.items);
  return (
    <div className='collection'>
      <h2>Collection Page</h2>
      {collection.items
        .map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
