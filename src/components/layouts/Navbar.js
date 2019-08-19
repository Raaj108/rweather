import React, { useEffect } from 'react';
import SearchRegion from '../region/SearchRegion';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { regionData } = props; 
  
  const now = (regionData) ? ("/forecast/" + regionData.Country.ID + "/" + regionData.LocalizedName + "/" + regionData.Key ) : "/";
  const hourlyWeatherForecast = (regionData) ? ("/forecast/" + regionData.Country.ID + "/" + regionData.LocalizedName + "/" + regionData.Key + "/hourly-weather-forecast") : "/";
  const dailyWeatherForecast = (regionData) ? ("/forecast/" + regionData.Country.ID + "/" + regionData.LocalizedName + "/" + regionData.Key + "/daily-weather-forecast") : "/"; 
  
  const handleClick = (e) => {
      const link = e.currentTarget;
      const activeLink = document.getElementsByClassName("nav-item active")[0];
      console.log(activeLink)
      activeLink.classList.remove("active");
      if (!link.classList.contains("active")) {
          link.classList.add("active")
      }
  }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">           
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active" onClick={handleClick}>
                  <Link className="nav-link" to={now}>Now</Link>
                </li>
                <li className="nav-item" onClick={handleClick}>
                  <Link className="nav-link" to={hourlyWeatherForecast}>Hourly</Link>
                </li> 
                <li className="nav-item" onClick={handleClick}>
                  <Link className="nav-link" to={dailyWeatherForecast}>Daily</Link>
                </li>                            
              </ul>                        
            </div>
          </div>
        </nav>
    )
}

export default Navbar;