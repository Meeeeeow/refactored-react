import styled,{css} from 'styled-components';

export const CheckoutItemStyle = styled.div`
    width:100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgray;
    padding: 20px 0;
    align-items: center;
`;

export const ImageContainerStyle = styled.div`
    width:23%;
    padding-right: 20px ;
`;
export const ImageStyle = styled.img`
        width:100%;
        height:100%;
`;
const textStyle = css`
    width:23%;
    font-size:18px;
`;
export const ItemName = styled.span`
    ${textStyle}
`;
export const ItemQuantity = styled.span`
    ${textStyle}
    padding-left: 28px;
    display:flex;
`;
export const ItemPrice = styled.span`
    ${textStyle}
    padding-left: 15px;
`;
export const ArrowStyle = styled.div`
    cursor: pointer;
`;
export const ItemValue = styled.span`
    margin: 0 15px;
`;
export const RemoveButtonStyle = styled.div`
    padding-left: 25px;
    cursor: pointer;
    font-size:32px;
    font-weight: bold;
`;