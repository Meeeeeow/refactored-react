import React from 'react'
import { CustomButtonStyle } from '../styles styledComponent/customButton.styles';
// import '../styles/customButton.styles.scss';
// const CustomButton = ({children , isGoogleSignedin, inverted, ...otherProps}) => {
//   return (
//     <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignedin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
//          {children}
//     </button>
//   )
// }
const CustomButton = ({children , ...otherProps}) => {
  return (
    <CustomButtonStyle {...otherProps}>
         {children}
    </CustomButtonStyle>
  )
}

export default CustomButton;