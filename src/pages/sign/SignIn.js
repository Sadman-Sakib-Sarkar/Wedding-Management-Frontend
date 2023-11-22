import React from 'react'
import './Sign.css'

const SignIn = () => {
  return (
    <>
      <div className="outer-box back-opacity p-2 p-4">
        <div className="text-center mt-2 text-dark">
          <h4>Buyer Sign In</h4>
          <p>Don’t have an account? <a href="/sign-up" className="text-danger">Free sign up</a></p>
        </div>
        <div className="container mt-4">
          <button type="button" className="btn btn-light btn-lg btn-block btn-outline-dark"><i
            className="fa-brands fa-facebook"></i> Sign in with Facebook</button>
          <button type="button" className="btn btn-light btn-lg btn-block btn-outline-dark"><i
            className="fa-brands fa-google"></i> Sign in with Google</button>
          <button type="button" className="btn btn-light btn-lg btn-block btn-outline-dark"><i
            className="fa-brands fa-apple"></i> Sign in with Apple</button>
        </div>
        <div className="text-center mt-4">
          <p>Or log in with your email</p>
        </div>
        <div className="text-center container mt-4">
          <form>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email" required/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your password" required/>
            </div>
            <button type="submit" className="btn btn-danger mt-3">Log in</button>
          </form>
        </div>

        <div className="text-center mt-3">
          <h6 className="text-secondary display-6">Are you a vendor?</h6>
          <a href="/vendor-sign-in" className="text-danger">Vendor Log in</a>
        </div>
      </div>
    </>

  )
}

export default SignIn