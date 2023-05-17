import React  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Login from "./Login/Login";
import Master from "./Flight/Master";
import MasterHotel from "./Hotel/MasterHotel";
import Header from "./Header/Header";
import Checkout from "./CheckOut/Checkout";
import FooterBlue from "./Footer/FooterBlue";
import Features from "./Features/Features";
import Properties from "./Properties/Properties";
import Homeguest from "./Homeguest/Homeguest";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<MasterHotel />} />
        <Route exact path='/masterFlight' element={<Master />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/checkout' element={<Checkout />} />
      </Routes>
      
      <div className="feature_container">
        <Features/><hr/></div>
          
        <div className="home_title" style={{fontSize:"25px",marginBottom:"0px",fontWeight:"600"}}><p>Browse by property name</p></div>
         <div className="feature_container">
           <Properties/><hr/></div>

        <div><h1 className="home_title" style={{fontSize:"25px",marginBottom:"0px",fontWeight:"600"}}>Home guest love</h1></div> 
         <div className="feature_container">  
          <Homeguest/><hr/></div>
          
        
      
      <FooterBlue />
    </Router>
  );
};

export default App;
