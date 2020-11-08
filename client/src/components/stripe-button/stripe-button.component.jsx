import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HdbEpF4l4VuEiyzHPLLCKiE5KGZOadsRBELo8ZKqmfN1Xe42565ZPAAJ1hpaBFReY8ZO0fdH5wacNdbOFwkW005001vBTYU9l";

  const onToken = (token) => {
    axios({
      url:'payment',
      method:'post',
      data:{
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error:', JSON.parse(error));
      alert('There was an issue with your payment. Please sure you use the provied credit card')
    })
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      ComponentClass="div"
      amount={priceForStripe}
      stripeKey={publishableKey}
      shippingAddress
      billingAddress
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};
export default StripeCheckoutButton;
