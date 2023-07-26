import React from 'react'
// import '../styles/formInput.styles.scss';
import { GroupStyle, InputStyle, LabelStyle } from '../styles styledComponent/formInput.styles';

const FormInput = ({label, ...otherProps}) => {
  return (
    <GroupStyle>
        <InputStyle {...otherProps}/>
        {
            label ? (
                <LabelStyle
                    className={otherProps.value.length ? 'shrink' : ''} 
                > 
                  {label}
                </LabelStyle>
            )  : null
        }
    </GroupStyle>
  )
}

export default FormInput;