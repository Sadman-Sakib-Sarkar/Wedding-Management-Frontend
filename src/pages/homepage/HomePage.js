import React from 'react'
import './HomePage.css'

const HomePage = () => {
  return (
    <>
      <div className="home container">
        <div>
          <h1 className="display-4 text-light">Discover everything you need to<br></br> plan your big day</h1>
        </div>
        <div className="mt-4">
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search for" aria-label="Search"/>
              <input className="form-control mr-sm-2" type="search" placeholder="in (E.g. Dhaka)" aria-label="Search"/>
              <button className="button-radi btn btn-danger my-2 my-sm-0" type="submit"><i
                className="fa-solid fa-magnifying-glass fa-beat"></i> Find</button>
            </form>
          <h6 className="display-6 mt-3">Are you a <a href="/vendor-sign-in" className="text-light">vendor?</a></h6>
        </div>
      </div>
    </>
  )
}

export default HomePage