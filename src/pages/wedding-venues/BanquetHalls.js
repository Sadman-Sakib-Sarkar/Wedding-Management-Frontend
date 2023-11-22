import React from 'react'
import '../homepage/HomePage.css'
import './WeddingVennues.css'
import panpacific from '../../assets/panpacific.jpg'
import intercontinental from '../../assets/intercontinental.jpg'
import radisson from '../../assets/radisson.jpg'
import syamoli from '../../assets/syamoli.jpg'
import bgb from '../../assets/bgb.jpg'
import grand from '../../assets/grand.jpg'
import jalsha from '../../assets/jalsha.jpg'
const BanquetHalls = () => {
  return (
    <>
      <div className="container">
        <h1 className="display-5 text-light">Banquet Halls</h1>

        <div className="mt-4">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Banquet Halls" aria-label="Search"/>
            <input className="form-control ml-n1 mr-sm-2" type="search" placeholder="in (E.g. Dhaka)" aria-label="Search"/>
            <button className="button-radi ml-n1 btn btn-danger my-2 my-sm-0" type="submit"><i
              className="fa-solid fa-magnifying-glass"></i> Find</button>
          </form>
        </div>
      </div>

      <div className="container mt-5">
        <button type="button" className="btn btn-light"><i className="fa-solid fa-filter"></i> Filters</button>
        <p className="text-secondary text-light ml-3 align-self-center d-inline">84 RESULTS</p>
      </div>

      <div className="container d-flex flex-wrap justify-content-between">

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={syamoli} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Shyamoli Banquet Hall</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.1<span> &bull; </span>Mohammadpur, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 50,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={bgb} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">BGB Banquet Hall</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.3<span> &bull; </span>Shimanto Square, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 40,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={grand} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Grand City Banquet Hall</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.6<span> &bull; </span> Dhanmondi, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 60,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={panpacific} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">The Atrium Banquet Hall</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.6<span> &bull; </span>Gazipur, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 50,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={intercontinental} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">JFP Banquet Hall</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.5<span> &bull; </span> Farmgate, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 60,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={jalsha} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Jalsha Banquet Hall</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.8<span> &bull; </span>Khilgaon, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 40,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

      </div>

    </>
  )
}

export default BanquetHalls