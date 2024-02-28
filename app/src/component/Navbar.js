import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../css/Navbar.css"
import bk from "../Images/bklogo.jpeg"

export default function Navbar() {
    let location = useLocation()
    useEffect(() => {
        console.log(location.pathname)
    }, [location]);
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid ">
                <img src={bk} alt="" className="nav-img-logo" />
                <Link className="navbar-brand bg-danger " to=""><b>PG Blog</b> </Link>
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>




                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ "marginLeft": "230px" }}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className={`nav-item mx-2 fs-5`}>
                            <Link className={` nav-link ${location.pathname === '/home' ? "active" : ""} `} to="/home">Home</Link>
                        </li>
                        <li className={`nav-item mx-2 fs-5`} >
                            <Link className={` nav-link ${location.pathname === '/general' ? "active" : ""} `} aria-current="page" to="/general">General</Link>
                        </li>
                        <li className={`nav-item mx-2 fs-5`}>
                            <Link className={` nav-link ${location.pathname === '/city' ? "active" : ""} `} to="/city">City</Link>
                        </li>
                        <li className={`nav-item mx-2 fs-5`}>
                            <Link className={` nav-link ${location.pathname === '/nature' ? "active" : ""} `} to="/nature">Nature</Link>
                        </li>
                        <li className={`nav-item mx-2 fs-5`}>
                            <Link className={` nav-link ${location.pathname === '/animals' ? "active" : ""} `} to="/animals">Animals</Link>
                        </li>
                        <li className={`nav-item mx-2 fs-5`}>
                            <Link className={` nav-link ${location.pathname === '/technology' ? "active" : ""} `} to="/technology">Technology</Link>
                        </li>
                        <li className={`nav-item mx-2 fs-5`}>
                            <Link className={` nav-link ${location.pathname === '/programing' ? "active" : ""} `} to="/programing">Programing</Link>
                        </li>
                        <li className={`nav-item mx-2 fs-5`}>
                            <Link className={` nav-link ${location.pathname === '/gaming' ? "active" : ""} `} to="/gaming">Gaming</Link>
                        </li>
                        <li className={`nav-item mx-2 fs-5`}>
                            <Link className={` nav-link ${location.pathname === '/fish' ? "active" : ""} `} to="/fish">Fish</Link>
                        </li>
                        <li className={`nav-item mx-2 fs-5`}>
                            <Link className={` nav-link ${location.pathname === '/flower' ? "active" : ""} `} to="/flower">Flower</Link>
                        </li>
                        <li className={`nav-item mx-2 fs-5`}>
                            <Link className={` nav-link ${location.pathname === '/insects' ? "active" : ""} `} to="/insects">Insects</Link>
                        </li>
                        {/* <li className={`nav-item mx-2 fs-5`}>
                            <Link className={` nav-link ${location.pathname === '/cars' ? "active" : ""} `} to="/cars">Cars</Link>
                        </li> */}

                        <li className="nav-item mx-2 fs-5">
                            <Link className={` nav-link ${location.pathname === '/about' ? "active" : ""} `} to="/about">AboutUs</Link>
                        </li>


                    </ul>

                    <div style={{ "marginLeft": "150px" }}>
                        <form className="d-flex" id="home_search" >
                            <Link className="btn btn-outline-danger " id='logbtn' style={{ "width": "140px" }} to='/' type="submit">Logout</Link>


                        </form>
                    </div>

                </div>
            </div>
        </nav>

    )
}
