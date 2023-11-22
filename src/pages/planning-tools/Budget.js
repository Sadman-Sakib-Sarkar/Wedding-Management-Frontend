import React from 'react'
import './PlanningTools.css'

const Budget = () => {
  return (
    <>
      <div className="full-box container">
        <div>
          <h1 className="display-4 text-light">Wedding Budget</h1>
          <h6 className="display-6 text-light mt-3">Manage your wedding costs and stay within your budget with DreamWed's<br></br> easy-to-use Budget Planner.</h6>
          <h6 className="display-6 text-light mt-3">GET STARTED:</h6>
        </div>
        <div>
          <form className="form-inline mt-3">
            <input className="form-control mr-sm-2" type="search" placeholder="Name and surname" aria-label="Search"/>
            <input className="form-control mr-sm-2 ml-3" type="search" placeholder="Email" aria-label="Search"/>
            <button className="btn btn-danger my-2 my-sm-0 ml-3" type="submit">Start Planning</button>
          </form>
        </div>
        <h2 className="display-5 text-light lower-heading text-center">Create a stress-free wedding budget</h2>
        <h6 className="display-5 text-light mt-4 text-center">Your Budget Planner will keep your budget and payment deadlines under control.</h6>

        <div className="d-flex justify-content-between mt-4">
          <div className="text-center">
            <h4 className="display-5 text-light">Let us do the math</h4>
            <p className="text-light">Enter your wedding budget and we’ll<br></br> calculate estimated costs by category<br></br> for you.</p>
          </div>
          <div className="text-center">
            <h4 className="display-5 text-light">Customise as needed</h4>
            <p className="text-light">Adjust your budget according to your<br></br> wedding and create new categories<br></br> as needed.</p>
          </div>
          <div className="text-center">
            <h4 className="display-5 text-light">Track your expenses</h4>
            <p className="text-light">Monitor your spending and get a breakdown<br></br> of your wedding expenses.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Budget