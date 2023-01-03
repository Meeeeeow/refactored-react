import React from 'react'
import '../styles/customButton.styles.scss';
const CustomButton = ({children , isGoogleSignedin, inverted, ...otherProps}) => {
  return (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignedin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
         {children}
    </button>
  )
}

export default CustomButton;