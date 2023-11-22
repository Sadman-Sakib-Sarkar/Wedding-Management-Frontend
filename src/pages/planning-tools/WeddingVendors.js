import React from 'react'
import './PlanningTools.css'

const WeddingVendors = () => {
  return (
    <>
      <div className="full-box container">
        <div>
          <h1 className="display-4 text-light">Wedding Vendor Manager</h1>
          <h6 className="display-6 text-light mt-3">Put together the most complete wedding team and manage them with your DreamWed Vendor Manager.</h6>
          <h6 className="display-6 text-light mt-3">GET STARTED:</h6>
        </div>
        <div>
          <form className="form-inline mt-3">
            <input className="form-control mr-sm-2" type="search" placeholder="Name and surname" aria-label="Search"/>
            <input className="form-control mr-sm-2 ml-3" type="search" placeholder="Email" aria-label="Search"/>
            <button className="btn btn-danger my-2 my-sm-0 ml-3" type="submit">Start Planning</button>
          </form>
        </div>
        <h2 className="display-5 text-light lower-heading text-center">Keep all your vendor details together</h2>
        <div className="d-flex justify-content-between mt-5">
          <div className="text-center">
            <h4 className="display-5 text-light">Get in touch with vendors</h4>
            <p className="text-light">Easily find and message vendors right from<br></br> your WeddingWire account.</p>
          </div>
          <div className="text-center">
            <h4 className="display-5 text-light">Easy and informed decisions</h4>
            <p className="text-light">Base decisions on vendors' reviews and prices<br></br> to make the best choices.</p>
          </div>
          <div className="text-center">
            <h4 className="display-5 text-light">Don't forget anything</h4>
            <p className="text-light">Include notes and additional information<br></br> about each vendor for later reference.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeddingVendors