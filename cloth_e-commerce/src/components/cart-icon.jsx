import React from 'react'
import { useSelector } from 'react-redux';
import { CartIconStyle, CartLogoStyle, CountStyle } from '../styles styledComponent/cartIcon.styles';
const CartIcon = () => {
  const totalProducts = useSelector(({cart : {cartItems}})=> cartItems.reduce(((acc,cartItem) => acc + cartItem.quantity),0))
  return (
    <CartIconStyle>
        <CartLogoStyle/>
        <CountStyle>{totalProducts}</CountStyle>
    </CartIconStyle>
  )
}

export default CartIcon;