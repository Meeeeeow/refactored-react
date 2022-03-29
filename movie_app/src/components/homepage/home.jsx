import React , {useEffect} from 'react'
import { MovieLists } from '../movieList/movieLists'

import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';

export const Home = () => {
    
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchAsyncMovies('Spider'));
        dispatch(fetchAsyncSeries('Mouse'));
    },[dispatch])
  return (
    <>
        <div className='banner-img'>

        </div>
        <MovieLists/>
    </>

  )
}
