import styled from 'styled-components';
import CustomButton
 from '../components/customButton';
export const CartDropDownStyles = styled.div`
    position: absolute;
    width:auto;
    height:380px;
    display: flex;
    flex-direction: column;
    border:1px solid black;
    background-color: white;
    padding:20px;
    top:90px;
    right:40px;
    z-index:999;
`;

export const CartItemsStyle = styled.div`
    height:250px;
    display: flex;
    flex-direction:column;
`;

export const MessageStyle = styled.span`
    font-size:18px;
    margin:50px auto;
`;

export const CartDropDownButtonStyle = styled(CustomButton)`
    margin-top:auto;
`;