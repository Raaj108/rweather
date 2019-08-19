import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHourlyForecast } from '../../../redux/actions/forecasts/forecastActions';
import HourlyForecastCard from './HourlyForecastCard';
import HourlyPrecipCard from './HourlyPrecipCard';
import HourlySkyCard from './HourlySkyCard';
import Graph from './Graph';
import Region from '../../region/Region';
import { Redirect } from 'react-router-dom';

const HourlyForecast = (props) => {  
  
  const{ forecasts, region } = props;
  const key = props.match.params.key;
  const unitSystem = forecasts.unitSystem;
    
  useEffect(()=>{
    props.fetchHourlyForecast(key, unitSystem);
  },[key, unitSystem]);
  
  return (
     (forecasts.isHourlyForecastDataLoaded) ? (
      <div id="hourlyForecast" className="mt-4 mb-4 w-80">   
         <Region></Region>         
         <HourlyForecastCard forecasts={forecasts}></HourlyForecastCard>
         <HourlyPrecipCard forecasts={forecasts}></HourlyPrecipCard>
         <HourlySkyCard forecasts={forecasts}></HourlySkyCard>
         <Graph data={forecasts.forecastData} unitSystem={forecasts.unitSystem}></Graph>
      </div>
    ) : (
      <div className="mt-4 mb-4">Loading...</div>
    ) 
  )
}

const mapStateToProps = (state) => { 
  
    return {
      forecasts: state.forecast,
      region: state.region
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHourlyForecast : (key, unitSystem) =>  {dispatch(fetchHourlyForecast(key, unitSystem))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HourlyForecast);