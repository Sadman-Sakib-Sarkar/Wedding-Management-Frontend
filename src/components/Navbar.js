import React from 'react'
import dw from '../assets/dw.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
         <a className="navbar-brand ml-4" href="/"><img className="logo ml-5" src={dw} alt="DW"/></a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                 aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex justify-content-start">
              <li className="nav-item dropdown active mr-2">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                  PLANNING TOOLS
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/checklist">Checklist</a>
                  <a className="dropdown-item" href="/guests">Guests</a>
                  <a className="dropdown-item" href="/wedding-vendors">Wedding Vendors</a>
                  <a className="dropdown-item" href="/wedding-website">Wedding Website</a>
                  <a className="dropdown-item" href="/budget">Budget</a>
                </div>
              </li>
            <li className="nav-item dropdown active mr-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                WEDDING VENUES
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/hotels">Hotels</a>
                <a className="dropdown-item" href="/banquet-halls">Banquet Halls</a>
                <a className="dropdown-item" href="/wedding-resorts">Wedding Resorts</a>
                <a className="dropdown-item" href="/marriage-garden">Marriage Garden</a>
              </div>
            </li>
            <li className="nav-item dropdown active mr-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                WEDDING VENDORS
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/wedding-photographers">Wedding Photographers</a>
                <a className="dropdown-item" href="/caterers">Caterers</a>
                <a className="dropdown-item" href="/wedding-videography">Wedding Videography</a>
                <a className="dropdown-item" href="/wedding-music">Wedding Music</a>
                <a className="dropdown-item" href="/florists">Florists</a>
                <a className="dropdown-item" href="/wedding-transportation">Wedding Transportation</a>
              </div>
            </li>
            <li className="nav-item dropdown active mr-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                BRIDES
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/mehndi-artists">Mehndi Artists</a>
                <a className="dropdown-item" href="/makeup-artists">Makeup Artists</a>
                <a className="dropdown-item" href="/jewellery">Jewellery</a>
                <a className="dropdown-item" href="/lehenga">Lehenga</a>
                <a className="dropdown-item" href="/makeup-salon">Makeup Salon</a>
              </div>
            </li>
            <li className="nav-item dropdown active mr-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                GROOMS
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/sherwani">Sherwani</a>
              </div>
            </li>
            <li className="nav-item active mr-2">
              <a className="nav-link" href="/about-us">ABOUT US<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active mr-2">
              <a className="btn btn-outline-danger" href="/sign-in" role="button">SIGN IN</a>
            </li>
            <li className="nav-item active mr-2">
              <a className="btn btn-danger" href="/sign-up" role="button">SIGN UP</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar