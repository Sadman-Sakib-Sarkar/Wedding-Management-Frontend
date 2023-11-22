import React from 'react'
import '../homepage/HomePage.css'
import '../wedding-venues/WeddingVennues.css'
import alphacaterer from '../../assets/alphacaterer.jpg'
import salsa from '../../assets/salsa.jpg'
import alomgir from '../../assets/alomgir.jpg'
import palmera from '../../assets/palmera.jpg'
import laxania from '../../assets/laxania.jpg'
import bbcatering from '../../assets/bbcatering.jpg'
const Caterers = () => {
  return (
    <>
      <div className="container">
        <h1 className="display-5 text-light">Wedding Catering Services</h1>

        <div className="mt-4">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Caterers" aria-label="Search"/>
            <input className="form-control ml-n1 mr-sm-2" type="search" placeholder="in (E.g. Dhaka)" aria-label="Search"/>
            <button className="button-radi ml-n1 btn btn-danger my-2 my-sm-0" type="submit"><i
              className="fa-solid fa-magnifying-glass"></i> Find</button>
          </form>
        </div>
      </div>

      <div className="container mt-5">
        <button type="button" className="btn btn-light"><i className="fa-solid fa-filter"></i> Filters</button>
        <p className="text-secondary text-light ml-3 align-self-center d-inline">983 RESULTS</p>
      </div>

      <div className="container d-flex flex-wrap justify-content-between">

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={alphacaterer} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Alpha Catering</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.2<span> &bull; </span> Ring Road, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 40,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={salsa} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Salsa Catering BD</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.7<span> &bull; </span>Satarkul, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 35,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={alomgir} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Alamgir Catering Service</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.8<span> &bull; </span>Khilgaon, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 25,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={palmera} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Palmera Catering</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.9<span> &bull; </span>Uttara, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 45,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={laxania} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Laxania Catering</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.8<span> &bull; </span> Banani, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 50,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={bbcatering} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">BB Catering</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.8<span> &bull; </span>Dhanmondi 27, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 40,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

      </div>

    </>
  )
}

export default Caterers