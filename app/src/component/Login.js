import React, { useState } from 'react'
// import axios from 'axios'
import '../css/Login.css'
import { useNavigate } from 'react-router-dom'
import swal from "sweetalert"


function Login() {
    document.title = "Bk-PG Blog || Login"
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")



    const submitData = async (e) => {
        e.preventDefault()
        if (password.length < 8) {
            window.alert("Password must be 8 digit")
        }
        const res = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const resData = await res.json();
        if (res.status === 404 || !resData) {
            swal({
                title: "Invalid User Id or Password",
                text: "Try Again",
                icon: "error",
                buttons: "okay"
            })
            // window.alert("INVALID User Id or Password")
        } else {

            swal({
                title: "Login Successfully",
                text: "WELCOMEEE :>",
                icon: "success",
                buttons: "Awsm!"
            })
            // window.alert("Login Successfully")
            navigate("/home")
        }


    }



    return (


        <div className="outercontainer" >
            <div className='innercontainer'>

                <form method="POST" >



                    <div className="box">
                        <label htmlFor="email" className="fl fontLabel"> Email ID: </label>

                        <div className="fl iconBox"><i className="fa fa-envelope" aria-hidden="true"></i></div>

                        <div className="fr">
                            <input type="email" required name="email" placeholder="Email Id" className="textBox" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>

                        <div className="clr"></div>

                    </div>




                    <div className="box">
                        <label htmlFor="password" className="fl fontLabel"> Password </label>

                        <div className="fl iconBox"><i className="fa fa-key" aria-hidden="true"></i></div>

                        <div className="fr">
                            <input type="Password" required name="password" placeholder="Password" className="textBox" onChange={(e) => { setPass(e.target.value) }} value={password} />
                        </div>

                        <div className="clr"></div>

                    </div>






                    <div className="box terms">
                        <input type="checkbox" name="Terms" required /> &nbsp; I accept the terms and conditions
                    </div>





                    <div className="box submitbtn" style={{ background: "#2d3e3f" }}>
                        <input type="Submit" name="Submit" className="submit " onClick={submitData} />


                        <button className='sb2'
                            onClick={() => navigate("/register")}>
                            Sign Up
                        </button>


                    </div>

                </form>

            </div>
        </div>




    )
}

export default Login