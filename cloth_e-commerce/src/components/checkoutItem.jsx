import React from 'react'
import '../styles/checkoutItem.styles.scss';
import { remove_item , add_item , remove_item_arrows } from '../store/actions/action';
import { useDispatch } from 'react-redux';
const CheckoutItem = ({cartItem }) => {
  const {name,price,quantity,imageUrl} = cartItem;
  const dispatch = useDispatch();  
  return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => dispatch(remove_item_arrows(cartItem))}>&#10094;</div>
                <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=> dispatch(add_item(cartItem))}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=> dispatch(remove_item(cartItem))}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;