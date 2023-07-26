import React,{useState,useEffect} from 'react'
// import '../styles/menuDirectory.styles.scss';
import { sections } from '../data/data';
import MenuItem from './menuItem';
import { DirectoryMenuStyles } from '../styles styledComponent/menuDirectory.styles';
const Menudirectory = () => {
  const [shopData, setShopData] = useState([]);
  useEffect(()=>{
    setShopData(sections);
  },[])
  return (
    <DirectoryMenuStyles>
        {
            shopData.map(({id , ...otherSections})=>(
                <MenuItem key={id} {...otherSections}/>
            ))
        }
    </DirectoryMenuStyles>
  )
}

export default Menudirectory;