import React from 'react'
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
      dispatch(fetchAsyncMovies(searchText));
      dispatch(fetchAsyncSeries(searchText));
  }
  const handleSubmit = (e) =>{
      e.preventDefault();

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
             <i className='fa fa-search'>Search</i>
           </button>
         </form>
       </div>
     
      <div className="user-image">
        <img src={user} alt ="user"/>
      </div>
    </div>
  )
}
