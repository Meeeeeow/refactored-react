import React,{useState , useEffect} from 'react'
import PreviewCollection from './preview-collection';
import { useSelector } from 'react-redux';
import { CollectionsOverviewStyle } from '../styles styledComponent/collectionsOverview.styles';
// import '../styles/collections-overview.styles.scss';
const CollectionsOverview = () => {
    const all_items = useSelector(({shop: {collections}}) => collections);
    const [shopData,setShopData] = useState([]);
    
    useEffect(()=>{
      setShopData(all_items);
    },[all_items])
    console.log(all_items);
    return (
        <CollectionsOverviewStyle>
            {
                shopData.map(({id,...otherSections})=>(
                    <PreviewCollection key={id} {...otherSections} />
                ))
            }  
        </CollectionsOverviewStyle>
    )
}

export default CollectionsOverview