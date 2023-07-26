import styled from 'styled-components';

export const MenuItemStyle = styled.div`
    width: 30%;
    height: ${({size})=> size ? '400px' : '250px'};
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
    
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }

    &:hover{
      cursor: pointer;

      & .background-image{
        transform: scale(1.1);
        transition: transform 7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      & .content{
        opacity: 0.85;
      }
    }

`;
export const BackgroundImageStyle = styled.div`
    width:100%;
    height:100%;
    background-position: center;
    background-size: cover;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
`;
export const ContentStyle = styled.div`
    height: 90px;
    padding: 10px 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background:rgb(234, 245, 243);
    opacity: 0.6;
    position: absolute;
`;
export const TitleStyle = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;
export const SubtitleStyle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;