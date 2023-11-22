import React from 'react'
import './PlanningTools.css'

const Checklist = () => {
  return (
    <>
      <div className="full-box container">
        <div>
          <h1 className="display-4 text-light">Your Free Wedding Checklist</h1>
          <h6 className="display-6 text-light mt-3">Keep your to-do list under control with DreamWed's free Checklist.</h6>
          <h6 className="display-6 text-light mt-3">GET STARTED:</h6>
        </div>
        <div>
          <form className="form-inline mt-3">
            <input className="form-control mr-sm-2" type="search" placeholder="Name and surname" aria-label="Search"/>
            <input className="form-control mr-sm-2 ml-3" type="search" placeholder="Email" aria-label="Search"/>
            <button className="btn btn-danger my-2 my-sm-0 ml-3" type="submit">Start Planning</button>
          </form>
        </div>
          <h2 className="display-5 text-light lower-heading text-center">Keep all your tasks in check with DreamWed</h2>
        <div className="d-flex justify-content-between mt-5">
          <div className="text-center">
            <h4 className="display-5 text-light">Customise your tasks</h4>
            <p className="text-light">You can easily modify your Checklist<br></br> to match your wedding needs.</p>
          </div>
          <div className="text-center">
            <h4 className="display-5 text-light">Manage your budget efficiently</h4>
            <p className="text-light">Complete each task calmly and on time,<br></br> and enjoy the planning process.</p>
          </div>
          <div className="text-center">
            <h4 className="display-5 text-light">Receive recommendations</h4>
            <p className="text-light">You may find some items on our checklist<br></br> that you hadn't thought of.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checklist