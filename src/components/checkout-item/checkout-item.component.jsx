import React from "react";
import { connect } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cart/cart.action";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={cartItem.imageUrl} alt={cartItem.name} />
    </div>
    <div className="name">{cartItem.name}</div>
    <div className="quantity">
      <span className="arrow" onClick={() => decreaseQuantity(cartItem)}>
        &#10094;
      </span>
      <span className="value">{cartItem.quantity}</span>
      <span className="arrow" onClick={() => increaseQuantity(cartItem)}>
        &#10095;
      </span>
    </div>
    <div className="price">{cartItem.price}</div>
    <div className="remove-button" onClick={() => removeItem(cartItem)}>
      &#10005;
    </div>
  </div>
);

const mapDispatch = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  increaseQuantity: (item) => dispatch(increaseQuantity(item)),
  decreaseQuantity: (item) => dispatch(decreaseQuantity(item)),
});

export default connect(null, mapDispatch)(CheckoutItem);
