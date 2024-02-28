import React from 'react'

function ContactUs() {


// console.log(email,name,address,phn)




    return (
        <div className='bg-light'>

            <form className="row g-3 container p-4 " action="https://formsubmit.co/451b82952450425320a4c34188d6df5a" method="POST" style={{"marginLeft":"270px","border":"2px solid black", "borderRadius":"8px", }}>
        <h1 style={{ "display": "flex", "justifyContent": "center", "alignContent": "center",   }}><strong>ContectUs</strong></h1>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label"  >Email</label>
                    <input type="email" className="form-control" id="inputEmail4" name='email' placeholder="Your Email" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label" >Name</label>
                    <input type="text" className="form-control" id="inputPassword4" name='name' placeholder="Full Name"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label" >Address</label>
                    <input type="text" className="form-control" id="inputAddress" name='address' placeholder="1234 Main St"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label" >Phone No.</label>
                    <input type="number" className="form-control" id="inputAddress2"name='phone_no.'  placeholder="Phone No."/>
                </div>
                
             
                <div className="col-12">
                    <button type="submit"  className="btn btn-primary btn-lg">Send</button>
                </div>
            </form>
        </div>
    )
}

export default ContactUs
