import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/menuItem.styles.scss';
const MenuItem = ({title,imageUrl,size,linkUrl}) => {
  const navigate = useNavigate();
  return (
    <div className={`menu-item ${size}`} onClick={()=>{
      navigate(`hats`);
    }}>
        <div 
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
          className='background-image'>
        </div>
        <div className='content'>
          <h1 className='title'>
            {title.toUpperCase()}
          </h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
  )
}

export default MenuItem;