import React from 'react'
import SingleItem from './singleItem'
// import '../styles/previewCollection.styles.scss';
import { CollectionPreviewStyle, PreviewStyle, TitleStyle } from '../styles styledComponent/previewCollection.styles';

const PreviewCollection = ({title, items}) => {
  return (
    <CollectionPreviewStyle>
        <TitleStyle>{title.toUpperCase()}</TitleStyle>
        <PreviewStyle>
            {
                items.filter((item,index)=> index < 4)
                .map((item)=>(
                    <SingleItem key={item.id} item={item} />
                ))
            }
        </PreviewStyle>    
    </CollectionPreviewStyle>
  )
}

export default PreviewCollection