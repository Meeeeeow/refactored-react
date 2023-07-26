import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SingleItem from './singleItem';
import { CategoryItemStyle, CollectionsCategoryStyle, TitleStyle } from '../styles styledComponent/categoryPage.styles';
const CategoryPage = () => {
  const params = useParams();
  console.log(params);
  const categoryId = params.categoryId;
  const collections = useSelector(({shop: {collections}})=> collections.filter((collection) => collection.title.toLowerCase() === categoryId.toLowerCase()));
  console.log(collections[0].items); 
  
  console.log(categoryId);
  return (
    <CollectionsCategoryStyle>
      <TitleStyle>{categoryId.toUpperCase()}</TitleStyle>
      <CategoryItemStyle>
        {
          collections[0].items.map(item => <SingleItem key={item.id} item={item}/>)
        }
      </CategoryItemStyle>
    </CollectionsCategoryStyle>
  )
}
 
export default CategoryPage