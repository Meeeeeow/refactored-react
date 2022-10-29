import React from 'react'
import '../styles/menuItem.styles.scss';
const MenuItem = ({title,image,size}) => {
  return (
    <div className={`menu-item ${size}`}>
        <div 
          style={{
            backgroundImage: `url(${image})`
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