import React from 'react'
import './PlanningTools.css'

const Guests = () => {
  return (
    <>
      <div className="full-box container">
        <div>
          <h1 className="display-4 text-light">Wedding Guest List</h1>
          <h6 className="display-6 text-light mt-3">Keep your guests' information and RSVPs organised in one place with DreamWed’s free Guest List.</h6>
          <h6 className="display-6 text-light mt-3">GET STARTED:</h6>
        </div>
        <div>
          <form className="form-inline mt-3">
            <input className="form-control mr-sm-2" type="search" placeholder="Name and surname" aria-label="Search"/>
            <input className="form-control mr-sm-2 ml-3" type="search" placeholder="Email" aria-label="Search"/>
            <button className="btn btn-danger my-2 my-sm-0 ml-3" type="submit">Start Planning</button>
          </form>
        </div>
        <h2 className="display-5 text-light lower-heading text-center">Complete your wedding guest list</h2>
        <h6 className="display-5 text-light mt-4 text-center">Create your Guest List effortlessly, communicate with guests and keep them informed about your wedding.</h6>

        <div className="d-flex justify-content-between mt-4">
          <div className="text-center">
            <h4 className="display-5 text-light">Add your guests</h4>
            <p className="text-light">Import contacts to your guest list or add<br></br> them individually in a few moments.</p>
          </div>
          <div className="text-center">
            <h4 className="display-5 text-light">Easily organise guests</h4>
            <p className="text-light">You can even manage multiple celebrations<br></br> and organise guests by category.</p>
          </div>
          <div className="text-center">
            <h4 className="display-5 text-light">Receive and manage RSVPs</h4>
            <p className="text-light">Collecting RSVPs has never been so<br></br> easy thanks to your Wedding Website.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Guests