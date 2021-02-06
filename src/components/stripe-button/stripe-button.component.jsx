import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
  const stripPrice = price * 100;
  const publishableKey = 'pk_test_51IHosCDRMabatm23LGU2B22i4lBgBoE2EbWx6urODYsn1q3npUH2gi5kw3ru8QJkRQEhh0vbVDAmYKshjzVxXHpv00jyZcPpeO'

  const onToken = (token) => {
    console.log(token);
    alert("Successful payment");
  };

  const onClosed = () => {
    alert("Closed");
  };

  return(
    <StripeCheckout label='Pay Now'
                    name='CRWN Clothing Ltd.'
                    image='https://sendeyo.com/up/d/f3eb2117da'
                    description= {`Your total is $${price}`}
                    shippingAddress
                    amount={stripPrice}
                    billingAddress={false}
                    panelLabel="Pay now"
                    token={onToken}
                    stripeKey={publishableKey}
                    closed={onClosed}
    />
  )
};

export default StripeCheckoutButton;