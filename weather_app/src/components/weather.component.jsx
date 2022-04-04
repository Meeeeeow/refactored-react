import React from 'react'

const Weather = ({city,country,temp,max_temp,min_temp,description,weatherIcon,feel_temp,humidity,wind,pressure}) => {
  
  return (
    <div className='container'>
        
        {city && country ? (
          <div className="cards">
          <h1>{city} , {country}</h1>
          <h5 className='py-4'>
            <i className={`wi ${weatherIcon} display-1`}></i>
          </h5>
          <h4 className='py-3'>{description}</h4>
          <h1 className='py-2'>{temp}&deg;C</h1>
          <div className='mt-3 offset-md-3 weather-info d-flex flex-wrap justify-content-center border border-2 rounded-3 w-50 shadow-lg p-3 mb-5 ' >
           
            <span className="px-4">Min Temp: {min_temp}&deg;C</span>
            <span className="px-4">Max Temp: {max_temp}&deg;C</span>
            <span className='px-4'>Feels like: {feel_temp}&deg;C</span>
            <span className='px-4'>Humidity: {humidity}%</span>
            <span className='px-4'>Wind Speed: {wind}km/h</span>
            <span className='px-4'>Pressure: {pressure}mbar</span>
          </div>
         
        </div>
        ):null}
    </div>
  )
}


export default Weather;