import React from 'react'
// import '../styles/checkoutItem.styles.scss';
import { remove_item , add_item , remove_item_arrows } from '../store/actions/action';
import { useDispatch } from 'react-redux';
import { ArrowStyle, CheckoutItemStyle, ImageContainerStyle, ImageStyle, ItemName, ItemPrice, ItemQuantity, ItemValue, RemoveButtonStyle } from '../styles styledComponent/checkOutItem.styles';
const CheckoutItem = ({cartItem }) => {
  const {name,price,quantity,imageUrl} = cartItem;
  const dispatch = useDispatch();  
  return (
    <CheckoutItemStyle>
        <ImageContainerStyle>
            <ImageStyle alt='item' src={imageUrl}/>
        </ImageContainerStyle>
        <ItemName>{name}</ItemName>
        <ItemQuantity>
            <ArrowStyle onClick={() => dispatch(remove_item_arrows(cartItem))}>&#10094;</ArrowStyle>
                <ItemValue>{quantity}</ItemValue>
            <ArrowStyle onClick={()=> dispatch(add_item(cartItem))}>&#10095;</ArrowStyle>
        </ItemQuantity>
        <ItemPrice>{price}</ItemPrice>
        <RemoveButtonStyle onClick={()=> dispatch(remove_item(cartItem))}>&#10005;</RemoveButtonStyle>
    </CheckoutItemStyle>
  )
}

export default CheckoutItem;