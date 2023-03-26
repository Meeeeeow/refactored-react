import React from 'react'
import '../styles/customButton.styles.scss';
const CustomButton = ({children , isGoogleSignedin,  ...otherProps}) => {
  return (
    <button className={`${isGoogleSignedin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
         {children}
    </button>
  )
}

export default CustomButton;
