import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCartAction, addItemAction, removeItemAction } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div aria-label="decrease quantity" role="button" tabIndex="0" className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div aria-label="increase quantity" tabIndex="0" className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div></span>
      <span className="price">{price}</span>
      <div className="remove-button" tabIndex="0" aria-label="remove item" role="button" onClick={() => clearItem(cartItem)} >&#10005;</div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCartAction(item)),
  addItem: item => dispatch(addItemAction(item)),
  removeItem: item => dispatch(removeItemAction(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);