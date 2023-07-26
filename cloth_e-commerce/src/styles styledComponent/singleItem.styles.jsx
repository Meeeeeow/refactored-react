import styled from "styled-components";
import CustomButton from "../components/customButton";
export const CollectionItemStyles = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover{
        .image{
            opacity:0.8;
        }
        button{
            opacity: 0.85;
            display:block;
        }
    }
`;

export const ImageStyle = styled.div`
    width:100%;
    height:95%;
    background-position: center;
    background-size: cover;
    margin-bottom: 8px;
    background-image: ${({imageUrl})=> `url(${imageUrl})`};
`;

export const AddButton = styled(CustomButton)`
    width:80%;
    opacity:0.7;
    position: absolute;
    top:255px;
    display:none;
`;
export const CollectionDetailStyles = styled.div`
    width:100%;
    height:5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;
export const ItemName = styled.span`
    width: 90%;
    margin-bottom: 1rem;
`;
export const ItemPrice = styled.span`
    width:10%;
`;
