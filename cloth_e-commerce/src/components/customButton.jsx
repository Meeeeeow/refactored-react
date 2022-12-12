import React from 'react'
import '../styles/customButton.styles.scss';
const CustomButton = ({children , ...otherProps}) => {
  return (
    <button className='custom-button' {...otherProps}>
         {children}
    </button>
  )
}

export default CustomButton;