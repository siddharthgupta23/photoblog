import React from 'react'
import { Link } from 'react-router-dom'
// import Animal from '../Images/animal.jpg'
import Insects from '../Images/insects.jpg'
import Fish from '../Images/fish.jpg'
import Animal2 from '../Images/animal2.jpg'
import Anime from '../Images/anime.jpg'
import Flower from '../Images/flower.jpg'
import Nature from '../Images/nature.jpg'
// import Anime2 from '../Images/anime2.png'
import Logo from '../Images/bklogo.jpeg'
import Navbar from './Navbar'
function SecondryHome() {
    document.title = "Bk-PG Blog || Home"
    
  return (
    <>
    <Navbar/>




    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{"height": "700px"}}>
      <img src={Nature} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" style={{"height": "700px"}}>
      <img src={Anime} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" style={{"height": "700px"}}>
      <img src={Flower} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




<h1 style={{ "display": "flex", "justifyContent": "center", "alignContent": "center", "marginTop": "40px", "marginLeft": '30px', "textDecoration":"underline" }}><strong>Our Collection</strong></h1>

    <div className='container d-flex' style={{"justifyContent":"space-between","alignItems":"center"}}>
    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-5 shadow-lg col-md-3 my-5 "  style={{"backgroundImage": `url(${Animal2})`,"borderRadius":"10px"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <Link className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{"color":"white"}} to={"/animals"}> Animal</Link>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src={Logo} alt="PG Blog" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-1">
                <svg className="bi me-1" width="1em" height="1em">
                </svg>
                <small>Bk-PG Blog</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-1" width="1em" height="1em"></svg>
                {/* <small>Full View{Url}</small> */}
                <Link to='/animals' className="" style={{"textDecoration":"none", "color":"red"}}>See More</Link>

              </li>
            </ul>
          </div>
        </div>



        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-5 shadow-lg col-md-3 my-5 "  style={{"backgroundImage": `url(${Fish})`,"borderRadius":"10px"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <Link className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ "color":"white"}} to={"/fish"}> Fish</Link>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src={Logo} alt="PG Blog" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-1">
                <svg className="bi me-1" width="1em" height="1em">
                </svg>
                <small>Bk-PG Blog</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-1" width="1em" height="1em"></svg>
                {/* <small>Full View{Url}</small> */}
                <Link to='/fish' className="" style={{"textDecoration":"none", "color":"red"}}>See More</Link>

              </li>
            </ul>
          </div>
        </div>




        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-5 shadow-lg col-md-3  my-5 "  style={{"backgroundImage": `url(${Insects})`,"borderRadius":"10px"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <Link className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ "color":"white"}} to={"/insects"}> Insects</Link>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src={Logo} alt="PG Blog" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-1">
                <svg className="bi me-1" width="1em" height="1em">
                </svg>
                <small>Bk-PG Blog</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-1" width="1em" height="1em"></svg>
                {/* <small>Full View{Url}</small> */}
                <Link to='/insects' className="" style={{"textDecoration":"none", "color":"red"}}>See More</Link>

              </li>
            </ul>
          </div>
        </div>
    </div>


    <div className='container d-flex' style={{"justifyContent":"space-between","alignItems":"center"}}>


        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-5 shadow-lg col-md-5 "  style={{"backgroundImage": `url(${Anime})`,"borderRadius":"10px"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <Link className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ "color":"white", }} to={"/anime"}> Anime</Link>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src={Logo} alt="PG Blog" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-1">
                <svg className="bi me-1" width="1em" height="1em">
                </svg>
                <small>Bk-PG Blog</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-1" width="1em" height="1em"></svg>
                {/* <small>Full View{Url}</small> */}
                <Link to='/anime' className="" style={{"textDecoration":"none", "color":"red"}}>See More</Link>

              </li>
            </ul>
          </div>
        </div>




        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-5 shadow-lg col-md-5   "  style={{"backgroundImage": `url(${Nature})`,"borderRadius":"10px"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <Link className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ "color":"white"}} to={"/nature"}> Nature</Link>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src={Logo} alt="PG Blog" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-1">
                <svg className="bi me-1" width="1em" height="1em">
                </svg>
                <small>Bk-PG Blog </small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-1" width="1em" height="1em"></svg>
                {/* <small>Full View{Url}</small> */}
                <Link to='/nature' className="" style={{"textDecoration":"none", "color":"red"}}>See More</Link>

              </li>
            </ul>
          </div>
        </div>
</div>


<div className='container ' >


        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-5 shadow-lg  my-5"  style={{"backgroundImage": `url(${Flower})`,"borderRadius":"10px"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <Link className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ "color":"white"}} to={"/flower"}> Flower</Link>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src={Logo} alt="PG Blog" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-1">
                <svg className="bi me-1" width="1em" height="1em">
                </svg>
                <small>Bk-PG Blog</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-1" width="1em" height="1em"></svg>
                {/* <small>Full View{Url}</small> */}
                <Link to='/flower' className="" style={{"textDecoration":"none", "color":"red"}}>See More</Link>

              </li>
            </ul>
          </div>
        </div>



</div>




    </>
  )
}

export default SecondryHome
