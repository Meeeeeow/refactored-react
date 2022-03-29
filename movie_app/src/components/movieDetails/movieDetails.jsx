import React, {useEffect} from 'react'
import { useParams } from 'react-router';
import { useDispatch , useSelector } from 'react-redux';
import { fetchAsyncShowsSingle, getSelectedSeries } from '../../features/movies/movieSlice';
import { actions } from '../../features/movies/movieSlice';
import './movieDetails.scss';
export const MovieDetails = () => {
  const {imdbID} = useParams();
  console.log(imdbID);
  const dispatch = useDispatch();
  const show = useSelector(getSelectedSeries);
  console.log(show);
  useEffect(()=>{
    dispatch(fetchAsyncShowsSingle(imdbID))

    return () =>{
      dispatch(actions.removeSelecetedShows());
    }
  },[dispatch,imdbID])
  return (
    <div className='movie-section'>
     {Object.keys(show).length === 0 ? (
       <div>...Loading</div>
     ) : (
       <>
           <div className='section-left'>
            <div className='movie-title'>
              {show.Title}
            </div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className='fa fa-star'></i> : {show.imdbRating}
              </span>
              <span>
                IMDB Votes <i className='fa fa-thumbs-up'></i> : {show.imdbVotes}
              </span>
              <span>
                Runtime <i className='fa fa-film'></i> : {show.Runtime}
              </span>
              <span>
                Year <i className='fa fa-calendar'></i> : {show.Year}
              </span>
            </div>
            <div className="movie-plot">{show.Plot}</div>
            <div className='movie-info'>
                <div>
                  <span>Director</span>
                  <span>{show.Director}</span>
                </div>
                <div>
                  <span>Cast</span>
                  <span>{show.Actors}</span>
                </div>
                <div>
                  <span>Genres</span>
                  <span>{show.Genre}</span>
                </div>
                <div>
                  <span>Languages</span>
                  <span>{show.Language}</span>
                </div>
                <div>
                  <span>Awards</span>
                  <span>{show.Awards}</span>
                </div>
            </div>
          </div>

          <div className="section-right">
            <img src={show.Poster} alt={show.title}/>
          </div>
       </>
     )}
    </div>
  )
}
