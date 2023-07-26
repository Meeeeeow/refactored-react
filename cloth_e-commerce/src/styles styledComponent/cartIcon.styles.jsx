import styled from 'styled-components';
import {ReactComponent as CartLogo} from '../assets/shopping-bag.svg';

export const CartIconStyle = styled.div`
    width:45px;
    height:45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top:-6px;
`;

export const CartLogoStyle = styled(CartLogo)`
    width:27px;
    height:27px;
`;
export const CountStyle = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`;