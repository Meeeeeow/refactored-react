import React from 'react'
import { useNavigate } from 'react-router-dom';
// import '../styles/menuItem.styles.scss';
import { BackgroundImageStyle, ContentStyle, MenuItemStyle, SubtitleStyle, TitleStyle } from '../styles styledComponent/menuItem.styles';
const MenuItem = ({title,imageUrl,size,linkUrl}) => {
  const navigate = useNavigate();
  return (
    <MenuItemStyle size={size} onClick={()=>{
      navigate(linkUrl);
    }}>
        <BackgroundImageStyle imageUrl = {imageUrl} 
          className='background-image'>
        </BackgroundImageStyle>
        <ContentStyle className='content'>
          <TitleStyle>
            {title.toUpperCase()}
          </TitleStyle>
          <SubtitleStyle>SHOP NOW</SubtitleStyle>
        </ContentStyle>
    </MenuItemStyle>
  )
}

export default MenuItem;