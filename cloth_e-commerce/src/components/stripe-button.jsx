import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import  { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clear_cart_checkout } from '../store/actions/action';
const StripeButton = ({ price }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const priceStripe = price * 100;
  const publishableKey = 'pk_test_51MNj8vH690vq4UdQnzm75TvLGOuBErrZ3dtgKIAdyZcLjHPWPs2SaFdmKyAldNg6OLXdH87N4SwboBNnH8sKDPax00DfnFEzCD';
  
  const onToken = async(token) =>{
    console.log(token);
    alert('Payment successful');
    await dispatch(clear_cart_checkout());
    navigate('/');
  }
  return (
    <StripeCheckout
        label='Pay Now'
        name='Crown Jewel'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceStripe}
        panelLabel ='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
  )
}

export default StripeButton;