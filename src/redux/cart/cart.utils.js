export const addItemToCart = (cartItems, cartItemToAdd) => {
  let existingCartItem = false;
  cartItems.forEach((cartItem) => {
    if(!existingCartItem && cartItem.id === cartItemToAdd.id) {
      existingCartItem = true;
    }
  });
  if (existingCartItem) {
    console.log('exists');
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
