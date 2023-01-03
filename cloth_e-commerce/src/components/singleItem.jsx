import React from 'react'
import { useDispatch } from 'react-redux';
import '../styles/singleItem.styles.scss';
import CustomButton from './customButton';
import { add_item } from '../store/actions/action';

const SingleItem = ({item}) => {
  const {name,imageUrl,price} = item;
  const dispatch = useDispatch();
  return (
    <div className='collection-item'>
        <div
            style={{
                backgroundImage :`url(${imageUrl})`
            }} 
            className='image'>
        </div>

        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
        <CustomButton inverted onClick={()=> dispatch(add_item(item))}>Add to Cart</CustomButton>
    </div>
  )
}

export default SingleItem