import React , {useEffect} from 'react'
import { Link } from 'react-router-dom';
import user from '../../images/user.png';
import { useDispatch } from 'react-redux';
import './header.scss';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';
export const Header = () => {
  const [searchText,setSearchText] = React.useState("");
  const dispatch = useDispatch();
  const handleChange=(e) =>{
      setSearchText(e.target.value);
     
  }

  useEffect(()=>{
    const text = localStorage.getItem("searchedItem");
    console.log(text);
    console.log("Hello");
    setSearchText(text)
  },[])
  const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch(fetchAsyncMovies(searchText));
      dispatch(fetchAsyncSeries(searchText));
      localStorage.setItem("searchedItem",searchText);
  }
  return (
    <div className='header'>
      
      <div className='logo'><Link to='/'>Movie App  </Link></div>
       <div className="search-bar">
         <form onSubmit={handleSubmit}>
           <input
              type="text"
              value={ searchText }
              placeholder="Enter Movie or Series Names"
              onChange={handleChange}
           />
           <button type="submit">
             <i className='fa fa-search'></i>
           </button>
         </form>
       </div>
     
      <div className="user-image">
        <img src={user} alt ="user"/>
      </div>
    </div>
  )
}
