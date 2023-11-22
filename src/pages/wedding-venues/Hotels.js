import React from 'react'
import '../homepage/HomePage.css'
import './WeddingVennues.css'
import panpacific from '../../assets/panpacific.jpg'
import intercontinental from '../../assets/intercontinental.jpg'
import radisson from '../../assets/radisson.jpg'
import paragon from '../../assets/paragon.jpg'
import fortune from '../../assets/fortune.jpg'
import sixseason from '../../assets/sixseason.jpg'
const Hotels = () => {
  return (
    <>
      <div className="container">
        <h1 className="display-5 text-light">Hotel Wedding Venues</h1>

        <div className="mt-4">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Hotels" aria-label="Search"/>
            <input className="form-control ml-n1 mr-sm-2" type="search" placeholder="in (E.g. Dhaka)" aria-label="Search"/>
            <button className="button-radi ml-n1 btn btn-danger my-2 my-sm-0" type="submit"><i
              className="fa-solid fa-magnifying-glass"></i> Find</button>
          </form>
        </div>
      </div>

      <div className="container mt-5">
        <button type="button" className="btn btn-light"><i className="fa-solid fa-filter"></i> Filters</button>
        <p className="text-secondary text-light ml-3 align-self-center d-inline">256 RESULTS</p>
      </div>

      <div className="container d-flex flex-wrap justify-content-between">

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={panpacific} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="display-5">Pan Pacific</h5>
              <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.6<span> &bull; </span>Kazi Nazrul Islam Avenue, Dhaka</font></p>
              <h6 className="mt-n2 display-6">From <span>&#2547;</span> 50,000</h6>
              <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
            </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={intercontinental} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">InterContinental</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.5<span> &bull; </span> Minto Road, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 60,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={radisson} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Radisson Blu</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.8<span> &bull; </span>Airport Road, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 50,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={paragon} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Paragon Conventional Hall</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.8<span> &bull; </span>Dhanmondi, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 80,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={fortune} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Fortune Square</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.4<span> &bull; </span>Dhanmondi, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 40,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={sixseason} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Six Season Hotel</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.7<span> &bull; </span> Gulshan, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 60,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

      </div>

    </>
  )
}

export default Hotels