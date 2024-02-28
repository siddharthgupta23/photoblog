import React from 'react';

import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Registration from './component/Registration';






import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import About from './component/About';
import SecondryHome from './component/SecondryHome';

function App() {



  return (
    <Router>
      {/* <Navbar /> */}

      <Routes>
        <Route exact path='/' element={<Login key={"Login"} />}></Route>
        <Route exact path='/register' element={<Registration />}></Route>

        <Route exact path='/home' element={<SecondryHome />}></Route>


        <Route exact path='/general' element={<Home key={"nature"} Title={"General"} category={"general"} heading={"General"} />}></Route>
        <Route exact path='/city' element={<Home key={"city"} Title={"City"} category={"city"} heading={"City"} />}></Route>

        <Route exact path='/nature' element={<Home key={"nature"} Title={"Nature"} category={"nature"} heading={"Nature"} />}></Route>

        <Route exact path='/animals' element={<Home key={"animals"} Title={"Animals"} category={"animals"} heading={"Animals"} />}></Route>

        <Route exact path='/technology' element={<Home key={"technology"} Title={"Technology"} category={"technology"} heading={"Technology"} />}></Route>

        <Route exact path='/programing' element={<Home key={"programing"} Title={"Programing"} category={"programing"} heading={"Programing"} />}></Route>

        <Route exact path='/gaming' element={<Home key={"gaming"} Title={"Gaming"} category={"gaming"} heading={"Gaming"} />}></Route>

        <Route exact path='/fish' element={<Home key={"fish"} Title={"Fish"} category={"fish"} heading={"Fish"} />}></Route>

        <Route exact path='/flower' element={<Home key={"flower"} Title={"Flower"} category={"flower"} heading={"Flower"} />}></Route>


        <Route exact path='/insects' element={<Home key={"insects"} Title={"Insects"} category={"insects"} heading={"Insects"} />}></Route>

        <Route exact path='/anime' element={<Home key={"anime"} Title={"Anime"} category={"anime"} heading={"Anime"} />}></Route>

        <Route exact path='/about' element={<About />}></Route>






      </Routes>

    </Router>
  );
}

export default App;
