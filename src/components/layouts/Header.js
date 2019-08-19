import React from 'react';
import SearchRegion from '../region/SearchRegion';
import UnitSystem from './UnitSystem';
import { Route, Link } from 'react-router-dom';


const Header = () => {    
    const handleClick = (e) => {
        e.preventDefault();
        const selectedUnit = e.currentTarget.id;
        console.log(selectedUnit);
    }
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">RWeatherapp</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">              
              <Route path="/" component={SearchRegion}></Route>              
            </div>
           <UnitSystem></UnitSystem>
          </div>
        </nav>
    )
}

export default Header;