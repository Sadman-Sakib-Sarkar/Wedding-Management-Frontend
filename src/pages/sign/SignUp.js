import React from 'react'
import './Sign.css'

const SignUp = () => {
  return (
    <>
      <div className="outer-box back-opacity p-2 p-4">
        <div className="text-center mt-2 text-dark">
          <h4>Buyer Sign Up</h4>
        </div>
        <div className="container mt-4">
          <button type="button" className="btn btn-light btn-lg btn-block btn-outline-dark"><i
            className="fa-brands fa-facebook"></i> Sign up with Facebook</button>
          <button type="button" className="btn btn-light btn-lg btn-block btn-outline-dark"><i
            className="fa-brands fa-google"></i> Sign up with Google</button>
          <button type="button" className="btn btn-light btn-lg btn-block btn-outline-dark"><i
            className="fa-brands fa-apple"></i> Sign up with Apple</button>
        </div>
        <div className="text-center mt-4">
          <p>Or sign up with your email</p>
        </div>
        <div className="text-center container mt-4">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" id="validationCustom01" placeholder="Name and surname" required/>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
            </div>

            <button type="submit" className="btn btn-danger mt-3">Sign up</button>
          </form>
        </div>

        <div className="text-center mt-3">
          <p>Already have an account? <a href="/sign-in" className="text-danger">Log in</a></p>
        </div>
      </div>
    </>

  )
}

export default SignUp