import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SingleItem from './singleItem';
import '../styles/categoryPage.styles.scss';
const CategoryPage = () => {
  const params = useParams();
  console.log(params);
  const categoryId = params.categoryId;
  const collections = useSelector(({shop: {collections}})=> collections.filter((collection) => collection.title.toLowerCase() === categoryId.toLowerCase()));
  console.log(collections[0].items); 
  
  console.log(categoryId);
  return (
    <div className = 'collection-category'>
      <h1 className='title'>{categoryId.toUpperCase()}</h1>
      <div className='category-items'>
        {
          collections[0].items.map(item => <SingleItem key={item.id} item={item}/>)
        }
      </div>
    </div>
  )
}
 
export default CategoryPage