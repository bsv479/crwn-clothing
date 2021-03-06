export const addItemToCart = (cartItems, cartItemToAdd) => {
  const isExisting = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if(isExisting) {
    return cartItems.map(cartItem =>
      (cartItem.id === cartItemToAdd.id) ?
        {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    )
  }
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
};



export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  if(cartItemToRemove.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemToRemove);
  }

  return cartItems.map(
    cartItem => cartItem.id === cartItemToRemove.id ?
      {...cartItem, quantity: cartItem.quantity - 1} : cartItem
  );
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
};