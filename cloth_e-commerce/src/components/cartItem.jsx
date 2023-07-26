import React from 'react'
import { CartItemStyle, ImgStyle, ItemDetailsStyle, ItemNameStyle } from '../styles styledComponent/cartItem.styles';

const CartItem = ({item :{name,price,imageUrl,quantity}}) => {
  return (
    <CartItemStyle>
        <ImgStyle src={imageUrl} alt='cart item' />
        <ItemDetailsStyle>
            <ItemNameStyle>{name}</ItemNameStyle>
            <span >{quantity} X ${price}</span>
        </ItemDetailsStyle>
    </CartItemStyle>
  )
}

export default CartItem;