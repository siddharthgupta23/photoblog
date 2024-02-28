import React from 'react'
import ContactUs from '../try/ContactUs'

import Navbar from './Navbar'

function About() {
  document.title = "Bk-PG Blog || About"
  return (
    
    <div>
        <Navbar/>
        <div className="bg-light">
    <div className="container py-5">
      <div className="row h-100 align-items-center py-5">
        <div className="col-lg-6">
          <h1 className="display-4">About us </h1>
          <p className="lead text-muted mb-0">We are Jasleen and Raj as a Web Developer</p>
          <p className="lead text-muted">and developing cool and beautiful Webapplication
          </p>
        </div>
        <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid"/></div>
      </div>
    </div>
  </div>
  
  <div className="bg-white py-5">
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
          <h2 className="font-weight-light">Goal Statement</h2>
          <p className="font-italic text-muted mb-4">The Bk Photography Blog family believes in action, progress, and growth. The young startup has achieved several milestones in its active years till now,but nothing keeps us from seeking more and more </p><a href="/" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
        </div>
        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
        <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
          <h2 className="font-weight-light">Our Mission</h2>
          <p className="font-italic text-muted mb-4">There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul—and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.</p><a href="/" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
        </div>
      </div>
    </div>
  </div>
  
  <div className="bg-light py-5">
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-lg-5">
          <h2 className="display-4 font-weight-light">Our Group</h2>
          <p className="font-italic text-muted">We are Raj Dhaki And Jasleen Kaur Dhillon owner of this website</p>
        </div>
      </div>
  
      <div className="row text-center">
       
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 className="mb-0">Jasleen kaur dhillon</h5><span className="small text-uppercase text-muted">Back-End Developer</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
       
  
        
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 className="mb-0">Raj Dhaki</h5><span className="small text-uppercase text-muted">Front-End Developer</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
       
  
        
        
       
  
      </div>
    </div>
  </div>
  
 <ContactUs/>
  
  
  <footer className="bg-light pb-5 ">
    <div className="container text-center">
      <p className="font-italic text-muted mb-0">&copy; Copyrights Company.com All rights reserved.</p>
    </div>
  </footer></div>
  )
}

export default About