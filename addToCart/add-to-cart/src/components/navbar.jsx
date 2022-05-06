import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSignIn, faUserPlus } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="google.com">
                    <img src="https://iconape.com/wp-content/files/ly/153731/svg/153731.svg" alt="" width="60" height="34" class="d-inline-block align-text-top"/>
                        KARURA
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="google.com">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="google.com">Products</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="google.com">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="google.com">Contact Us</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

                <div className="buttons">
                    <a href="http://google.com" className='btn btn-outline-dark ms-2'>
                        <FontAwesomeIcon icon= {faSignIn} className='me-2'/>
                        Login
                    </a>
                    <a href="http://google.com" className='btn btn-outline-dark ms-2'>
                        <FontAwesomeIcon icon= {faUserPlus} className='me-2'/>
                        Register
                    </a>
                    <a href="http://google.com" className='btn btn-outline-dark ms-2'>
                        <FontAwesomeIcon icon= {faCartShopping} className='me-2'/>
                        Cart (0)
                    </a>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;