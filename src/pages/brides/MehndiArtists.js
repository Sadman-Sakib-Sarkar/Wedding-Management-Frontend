import React from 'react'
import '../homepage/HomePage.css'
import '../wedding-venues/WeddingVennues.css'
import elegant from '../../assets/elegant.jpg'
import roza from '../../assets/roza.jpg'
import armehndi from '../../assets/armehndi.jpg'
import nehamehndi from '../../assets/nehamehndi.jpg'
import fatimamehndi from '../../assets/fatimamehndi.jpg'
import lilaboti from '../../assets/lilaboti.jpg'
const MehndiArtists = () => {
  return (
    <>
      <div className="container">
        <h1 className="display-5 text-light">Bridal Mehndi Artists</h1>

        <div className="mt-4">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Mehndi Artists" aria-label="Search"/>
            <input className="form-control ml-n1 mr-sm-2" type="search" placeholder="in (E.g. Dhaka)" aria-label="Search"/>
            <button className="button-radi ml-n1 btn btn-danger my-2 my-sm-0" type="submit"><i
              className="fa-solid fa-magnifying-glass"></i> Find</button>
          </form>
        </div>
      </div>

      <div className="container mt-5">
        <button type="button" className="btn btn-light"><i className="fa-solid fa-filter"></i> Filters</button>
        <p className="text-secondary text-light ml-3 align-self-center d-inline">678 RESULTS</p>
      </div>

      <div className="container d-flex flex-wrap justify-content-between">

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={elegant} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Elegant Mehedi Art</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 5.0<span> &bull; </span>Mohammadpur, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 10,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={roza} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Artistics by Roza</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.3<span> &bull; </span> Mirpur 2, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 5,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={armehndi} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">A.R Mehedi Design</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 3.8<span> &bull; </span>Savar, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 3,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={nehamehndi} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Neha’s Mehedi Corner  </h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.7<span> &bull; </span>Gulshan, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 8,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={fatimamehndi} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Mehedi By Fatima</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.6<span> &bull; </span>Khilgaon, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 7,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={lilaboti} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Lilaboti Mehedi</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.2<span> &bull; </span> Uttara, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 5,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

      </div>

    </>
  )
}

export default MehndiArtists