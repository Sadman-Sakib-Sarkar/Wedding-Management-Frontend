import React from 'react'
import '../homepage/HomePage.css'
import '../wedding-venues/WeddingVennues.css'
import sultan from '../../assets/sultan.jpg'
import zayed from '../../assets/zayed.jpg'
import sherfashion from '../../assets/sherfashion.jpg'
import fawzi from '../../assets/fawzi.jpg'
import sherbd from '../../assets/sherbd.jpg'
import saiki from '../../assets/saiki.jpg'
const Sherwani = () => {
  return (
    <>
      <div className="container">
        <h1 className="display-5 text-light">Wedding Sherwani</h1>

        <div className="mt-4">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Sherwani" aria-label="Search"/>
            <input className="form-control ml-n1 mr-sm-2" type="search" placeholder="in (E.g. Dhaka)" aria-label="Search"/>
            <button className="button-radi ml-n1 btn btn-danger my-2 my-sm-0" type="submit"><i
              className="fa-solid fa-magnifying-glass"></i> Find</button>
          </form>
        </div>
      </div>

      <div className="container mt-5">
        <button type="button" className="btn btn-light"><i className="fa-solid fa-filter"></i> Filters</button>
        <p className="text-secondary text-light ml-3 align-self-center d-inline">576 RESULTS</p>
      </div>

      <div className="container d-flex flex-wrap justify-content-between">

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={sultan} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Sultan Sherwani</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.8<span> &bull; </span>Elephant Road, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 8,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={zayed} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Zayed Sherwani Gallery</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.5<span> &bull; </span> New Market, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 6,500</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={sherfashion} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Sherwani Fashion</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.6<span> &bull; </span>Mohakhali, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 8,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={fawzi} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">FAWZi</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.8<span> &bull; </span>Banani, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 10,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={sherbd} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Sherwani BD</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.6<span> &bull; </span>Karwan Bazar, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 5,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={saiki} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Saiki Sherwani House</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.7<span> &bull; </span> Savar, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 4,500</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

      </div>

    </>
  )
}

export default Sherwani