
import "../css/Registration.css"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import swal from 'sweetalert'

export default function Registration() {
    document.title = "Bk-PG Blog || SignUp"
    const navigate = useNavigate()

    const [name, setRname] = useState("")
    const [phnno, setPhn] = useState("")
    const [ganderM, setGenderM] = useState("")
    const [ganderF, setGenderF] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    console.log(ganderM,ganderF)
    // console.log(rname,phn,genderM,genderF,email,password)
    const submitData = async (e) => {
        e.preventDefault()



        if (password.length < 8) {
            window.alert("Enter minimum 8 digit password")
        }

        else {
            const res = await fetch('/creatUser', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    phnno,
                    email,
                    password,
                    ganderM,
                    ganderF,
                })
            })
            const resData = await res.json();
            console.log(resData)
            if (res.status === 400 || !resData) {

                swal({
                    title: " Please Fill Valid Details",
                    text: "Try Again",
                    icon: "error",
                    buttons: "Try Again"
                })
                // window.alert("INVALID")
            } else {
                swal({
                    title: " Created Account Successfully",
                    text: "Go To Login",
                    icon: "success",
                    buttons: "Awsm!"
                })
                // window.alert("DONEEE")
                navigate("/")
            }
        }

    }




    const Rinnercontainer = {
        background: "#2d3e3f",
        width: "454x",
        height: "450px",
        paddingBottom: "20px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        margin: "auto",
        padding: "70px 50px 20px 50px",
        borderRadius: "12px"
    }
    return (
        <div className='Outercontainer'>
            <div className='rinnercontainer' style={Rinnercontainer}>
                <form method="POST" >





                    <div className="box">
                        <label htmlFor="firstName" className="fl fontLabel"> Full Name: </label>

                        <div className="new iconBox">
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </div>
                        <div className="fr">

                            <input type="text" name="name" placeholder="Full Name" className="textBox" onChange={(e) => setRname(e.target.value)} value={name} required />
                        </div>

                        <div className="clr"></div>
                    </div>







                    <div className="box">
                        <label htmlFor="phone" className="fl fontLabel"> Phone No.: </label>

                        <div className="fl iconBox"><i className="fa fa-phone-square" aria-hidden="true"></i></div>

                        <div className="fr">
                            <input type="text" name="phn" placeholder="Phone No." onChange={(e) => setPhn(e.target.value)} value={phnno} className="textBox" />
                        </div>

                        <div className="clr"></div>
                    </div>

                    <div className="box">
                        <label htmlFor="email" className="fl fontLabel"> Email ID: </label>

                        <div className="fl iconBox"><i className="fa fa-envelope" aria-hidden="true"></i></div>

                        <div className="fr">
                            <input type="email" required name="email" placeholder="Email Id" onChange={(e) => setEmail(e.target.value)} value={email} className="textBox" />
                        </div>

                        <div className="clr"></div>

                    </div>

                    <div className="box">
                        <label htmlFor="password" className="fl fontLabel"> Password </label>

                        <div className="fl iconBox"><i className="fa fa-key" aria-hidden="true"></i></div>

                        <div className="fr">
                            <input type="Password" required name="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} value={password} className="textBox" />
                        </div>

                        <div className="clr"></div>

                    </div>

                    <div className="box radio">
                        <label htmlFor="gender" className="fl fontLabel"> Gender: </label>

                        <input type="radio" name="gender" value={ganderM} onClick={(e) => setGenderM("Male")} required /> Male &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="radio" name="gender" value={ganderF} onClick={(e) => setGenderF("Female")} required /> Female
                    </div>

                    <div className="box terms">
                        <input type="checkbox" name="Terms" required /> &nbsp; I accept the terms and conditions
                    </div>




                    <div className="box" style={{ "background": "#2d3e3f" }}>
                        <button className='sb2'
                            onClick={() => navigate("/")}>
                            Login
                        </button>
                        <input type="Submit" name="Submit" className="submit" onClick={submitData} />
                    </div>
                </form>

            </div>
        </div>
    )
}
