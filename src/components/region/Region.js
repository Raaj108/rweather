import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../layouts/Navbar';

const Region = (props) => {  
    
    const { selectedRegion, regionData} = props;   
   
    const region = (selectedRegion) ? (
      <h1 className="city-name">{selectedRegion}, {regionData[0].AdministrativeArea.EnglishName} - {regionData[0].Country.EnglishName} </h1>
    ) : null;
    
    return ( 
      <div className="region-card">
        <Navbar regionData={regionData[0]}></Navbar>
        {region}
      </div>
    );
}

const mapStateToProps = (state) => {    
  return {
    selectedRegion : state.region.selectedRegion,
    regionData : state.region.regionData
  }
}

export default connect(mapStateToProps)(Region);