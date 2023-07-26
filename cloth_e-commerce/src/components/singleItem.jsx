import React from 'react'
import { useDispatch } from 'react-redux';
// import '../styles/singleItem.styles.scss';
import { add_item } from '../store/actions/action';
import { AddButton, CollectionDetailStyles, CollectionItemStyles, ImageStyle, ItemName, ItemPrice } from '../styles styledComponent/singleItem.styles';

const SingleItem = ({item}) => {
  const {name,imageUrl,price} = item;
  const dispatch = useDispatch();
  return (
    <CollectionItemStyles>
        <ImageStyle 
          imageUrl = {imageUrl}
          className='image'>
        </ImageStyle>

        <CollectionDetailStyles>
            <ItemName>{name}</ItemName>
            <ItemPrice>${price}</ItemPrice>
        </CollectionDetailStyles>
        <AddButton  onClick={()=> dispatch(add_item(item))}  inverted>Add to Cart</AddButton>
    </CollectionItemStyles>
  )
}

export default SingleItem