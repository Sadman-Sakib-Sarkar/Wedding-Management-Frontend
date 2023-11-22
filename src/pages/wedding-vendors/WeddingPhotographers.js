import React from 'react'
import '../homepage/HomePage.css'
import '../wedding-venues/WeddingVennues.css'
import weddingdiary from '../../assets/weddingdiary.jpg'
import dreamweaver from '../../assets/dreamweaver.jpg'
import chitrogolpo from '../../assets/chitrogolpo.jpg'
import weddingmoments from '../../assets/weddingmoments.jpg'
import weddingstory from '../../assets/weddingstory.jpg'
import snapshot from '../../assets/snapshot.jpg'
const WeddingPhotographers = () => {
  return (
    <>
      <div className="container">
        <h1 className="display-5 text-light">Wedding Photographers</h1>

        <div className="mt-4">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Wedding Photographers" aria-label="Search"/>
            <input className="form-control ml-n1 mr-sm-2" type="search" placeholder="in (E.g. Dhaka)" aria-label="Search"/>
            <button className="button-radi ml-n1 btn btn-danger my-2 my-sm-0" type="submit"><i
              className="fa-solid fa-magnifying-glass"></i> Find</button>
          </form>
        </div>
      </div>

      <div className="container mt-5">
        <button type="button" className="btn btn-light"><i className="fa-solid fa-filter"></i> Filters</button>
        <p className="text-secondary text-light ml-3 align-self-center d-inline">1,328 RESULTS</p>
      </div>

      <div className="container d-flex flex-wrap justify-content-between">

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={weddingdiary} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Wedding Diary</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.5<span> &bull; </span>Mohammadpur, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 8,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={dreamweaver} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Dream Weaver</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.9<span> &bull; </span> Banani, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 10,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={weddingmoments} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Wedding Moments</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.4<span> &bull; </span>Farmgate, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 7,500</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={chitrogolpo} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Chitro Golpo</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.8<span> &bull; </span>Shyamoli, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 5,500</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={weddingstory} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">Wedding Story</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.7<span> &bull; </span>Kazi Nazrul Islam Avenue, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 9,000</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

        <div className="card card-size mt-3">
          <img className="card-img-top img-size" src={snapshot} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="display-5">SnapShot</h5>
            <p className="fw-lighter text-secondary"><font size="2"><i className="fa-solid fa-star"></i> 4.6<span> &bull; </span> Dhanmondi, Dhaka</font></p>
            <h6 className="mt-n2 display-6">From <span>&#2547;</span> 6,500</h6>
            <a href="#" className="btn btn-block btn-outline-danger">Request Pricing</a>
          </div>
        </div>

      </div>

    </>
  )
}

export default WeddingPhotographers