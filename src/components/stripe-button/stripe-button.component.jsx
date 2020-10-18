import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HdbEpF4l4VuEiyzHPLLCKiE5KGZOadsRBELo8ZKqmfN1Xe42565ZPAAJ1hpaBFReY8ZO0fdH5wacNdbOFwkW005001vBTYU9l";

  const onToken = (token) => {
    console.log(token);
    alert("Payment is successful!");
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
