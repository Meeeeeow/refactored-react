import styled from 'styled-components';
export const CheckoutPageStyle = styled.div`
    width:60%;
    min-height:90vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`;
export const CheckoutHeaderStyle = styled.div`
     width:100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgray;
`;
export const HeaderBlockStyle = styled.div`
    text-transform: capitalize;
    width:23%;
    font-size: 20px;

    &:last-child{
        width:8%;
    }
`;
export const TotalStyle = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
    font-weight: bold;
`;

export const WarningStyle = styled.div`
    text-align: center;
    margin-top: 50px;
    font-weight: bold;
    font-size: 22px;
    color: rgb(199, 21, 21);
`;
export const StripeButtonStyle = styled.div`
    margin-top: 50px;
    margin-left: auto;
`;