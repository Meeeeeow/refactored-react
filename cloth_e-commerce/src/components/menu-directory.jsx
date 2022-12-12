import React,{useState,useEffect} from 'react'
import '../styles/menuDirectory.styles.scss';
import { sections } from '../data/data';
import MenuItem from './menuItem';
const Menudirectory = () => {
  const [shopData, setShopData] = useState([]);
  useEffect(()=>{
    setShopData(sections);
  },[])
  return (
    <div className='directory-menu'>
        {
            shopData.map(({id , ...otherSections})=>(
                <MenuItem key={id} {...otherSections}/>
            ))
        }
    </div>
  )
}

export default Menudirectory;