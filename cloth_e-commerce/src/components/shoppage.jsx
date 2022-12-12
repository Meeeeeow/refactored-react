import React,{useState , useEffect} from 'react'
import SHOP_DATA from '../data/shop_data';
import PreviewCollection from './preview-collection';
const ShopPage = () => {
  const [shopData,setShopData] = useState([]);
  
  useEffect(()=>{
    setShopData(SHOP_DATA);
  },[])
  console.log(shopData);
  return (
    <div className='shop-page'>
       {
            shopData.map(({id,...otherSections})=>(
                <PreviewCollection key={id} {...otherSections} />
            ))
       }    
    </div>
  )
}

export default ShopPage;