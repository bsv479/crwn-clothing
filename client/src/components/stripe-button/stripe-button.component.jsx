import React from 'react'

import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.styles.scss';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IHosCDRMabatm23LGU2B22i4lBgBoE2EbWx6urODYsn1q3npUH2gi5kw3ru8QJkRQEhh0vbVDAmYKshjzVxXHpv00jyZcPpeO';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <div className='stripe-btn'>
      <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  )
};

export default StripeCheckoutButton;
