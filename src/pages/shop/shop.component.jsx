import React from "react";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCollections } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = ({ shopItems }) => (
  <div className="shop-page">
    {shopItems.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview
        key={id}
        {...otherCollectionProps}
      />
    ))}
  </div>
)
const mapStateToProps = createStructuredSelector({
  shopItems: selectCollections
})

export default connect(mapStateToProps)(ShopPage);
