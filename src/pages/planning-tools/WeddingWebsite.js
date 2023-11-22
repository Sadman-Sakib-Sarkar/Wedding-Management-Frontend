import React from 'react'
import './PlanningTools.css'

const WeddingWebsite = () => {
  return (
    <>
      <div className="full-box container">
        <div>
          <h1 className="display-4 text-light">Your Wedding Website</h1>
          <h6 className="display-6 text-light mt-3">Create your free Wedding Website and share all the juicy and relevant details about your upcoming<br></br> celebration with your guests.</h6>
          <h6 className="display-6 text-light mt-3">GET STARTED:</h6>
        </div>
        <div>
          <form className="form-inline mt-3">
            <input className="form-control mr-sm-2" type="search" placeholder="Name and surname" aria-label="Search"/>
            <input className="form-control mr-sm-2 ml-3" type="search" placeholder="Email" aria-label="Search"/>
            <button className="btn btn-danger my-2 my-sm-0 ml-3" type="submit">Start Planning</button>
          </form>
        </div>
        <h2 className="display-5 text-light lower-heading text-center">A simple, beautiful wedding website just for you</h2>
        <h6 className="display-5 text-light mt-4 text-center">All you need to do is choose your favourite (free!) template and include your celebration details.</h6>

        <div className="d-flex justify-content-between mt-4">
          <div className="text-center">
            <h4 className="display-5 text-light">Include the juicy details</h4>
            <p className="text-light">Let your guests know what to expect at your<br></br> wedding. What's the venue like, is there<br></br> accommodation...?</p>
          </div>
          <div className="text-center">
            <h4 className="display-5 text-light">Receive and manage RSVPs</h4>
            <p className="text-light">When your guests RSVP they sync automatically<br></br> with your Guest List.</p>
          </div>
          <div className="text-center">
            <h4 className="display-5 text-light">Your wedding album</h4>
            <p className="text-light">Create your WedShoots album and link<br></br> it to your Wedding Website.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeddingWebsite