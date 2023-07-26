import styled, {css} from 'styled-components';

const googleButtonStyles = css`
    background-color: #4285f4;
    color:white;
        
    &:hover{
        background-color:#357ae8;
        border: none;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
        background-color: black;
        color:white;
        border:none;
    }
`;
const generalButtonStyle = css`
    background-color: black;
    color:white;
    border: none;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const buttonStyle = props =>{
    console.log(props);
    if(props.isGoogleSignedin)
    {
        return googleButtonStyles;
    }

    return props.inverted ? invertedButtonStyles : generalButtonStyle;
}

export const CustomButtonStyle = styled.button`
    width:auto;
    min-width:165px;
    height:50px;
    letter-spacing: 0.5px;
    line-height: 50px;  
    font-size: 15px;
    padding: 0 35px;
    text-transform: uppercase;
    font-family: 'Open Sans'; 
    font-weight:bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${buttonStyle}
`;