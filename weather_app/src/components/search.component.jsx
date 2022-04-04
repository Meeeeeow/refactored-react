import React from 'react'
import './search.style.css';
const Search= ({weatherLoader}) => {
  return (
    <div className='container'>
       <form action="" onSubmit={weatherLoader}>
       <div className="row">
            <div className="col-md-3 mt-3 offset-md-2">
                <input type="text" className='form-control' placeholder="City" name="city" />
            </div>
            <div className="col-md-3 mt-3 ">
                <input type="text" className='form-control' placeholder="Country" name="country" />
            </div>
            <div className="col-md-3 mt-md-3 text-md-left">
                <button className="btn btn-info">Get the weather</button>
            </div>
        </div>     
       </form>
    </div>
  )
}
export default Search;