import React from 'react'
import '../homepage/HomePage.css'
import '../wedding-venues/WeddingVennues.css'
import panpacific from '../../assets/panpacific.jpg'
import intercontinental from '../../assets/intercontinental.jpg'
import radisson from '../../assets/radisson.jpg'
import bombshell from '../../assets/bombshell.jpg'
import makefarzana from '../../assets/makefarzana.jpg'
import shahida from '../../assets/shahida.jpg'
import lovas from '../../assets/lovas.jpg'
import magical from '../../assets/magical.jpg'
import logno from '../../assets/logno.jpg'
const MakeupArtists = () => {
  return (
    <>
      <div className="container">
        <h1 className="display-5 text-light">Bridal Makeup Artists</h1>

        <div className="mt-4">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Makeup Artists" aria-label="Search"/>
            <input className="form-control ml-n1 mr-sm-2" type="search" placeholder="in (E.g. Dhaka)" aria-label="Search"/>
            <button className="button-radi ml-n1 btn btn-danger my-2 my-sm-0" type="submit"><i
              className="fa-solid fa-magnifying-glass"></i> Find</button>
          </form>
        </div>
      </div>

      <div className="container mt-5">
        <button type="button" className="btn btn-light"><i className="fa-solid fa-filter"></i> Filters</button>
        <p className="text-secondary text-light ml-3 align-self-center d-inline">1,987 RESULTS</p>
      </div>

      <div className="container d-flex flex-wrap justify-content-between">

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={bombshell} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Makeup By Kona</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.4<span> &bull; </span> Savar, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 5,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={makefarzana} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Make It Up By Farzana</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.6<span> &bull; </span>Pantha Path, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 8,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={shahida} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Shahida's Beauty Wallet</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.2<span> &bull; </span>Banani, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 6,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={lovas} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Lovas Beauty Solutions</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.8<span> &bull; </span>Airport Road, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 8,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={magical} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Magical Mist by Maliha</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.9<span> &bull; </span> Mohammadpur, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 10,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={logno} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Logno Beauty Parlour</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.3<span> &bull; </span>Savar, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 4,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

      </div>

    </>
  )
}

export default MakeupArtists