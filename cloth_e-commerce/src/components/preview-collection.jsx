import React from 'react'
import SingleItem from './singleItem'
import '../styles/previewCollection.styles.scss';

const PreviewCollection = ({title, items}) => {
  return (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item,index)=> index < 4)
                .map((item)=>(
                    <SingleItem key={item.id} item={item} />
                ))
            }
        </div>    
    </div>
  )
}

export default PreviewCollection