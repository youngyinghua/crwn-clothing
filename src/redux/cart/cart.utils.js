export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

export const increaseQuantityToCartItem = (cartItems, cartQuantityToIncrease) =>
  cartItems.map((cartItem) => {
    if (cartItem.id === cartQuantityToIncrease.id) {
      return { ...cartItem, quantity: cartItem.quantity + 1 };
    }
    return cartItem;
  });

export const decreaseQuantityToCartItem = (
  cartItems,
  cartQuantityToDecrease
) => {
  if (cartQuantityToDecrease.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.id !== cartQuantityToDecrease.id
    );
  }
  return cartItems.map((cartItem) => {
    if (cartItem.id === cartQuantityToDecrease.id) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    }
    return cartItem;
  });
};
