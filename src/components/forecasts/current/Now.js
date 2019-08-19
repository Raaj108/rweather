import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentForecast } from '../../../redux/actions/forecasts/forecastActions';
import { selectRegion } from '../../../redux/actions/region/regionActions';
import ForecastCard from './ForecastCard';
import WeatherConditionsCard from './WeatherConditionsCard';
import TemperatureSummaryCard from './TemperatureSummaryCard';
import PreciptionSummaryCard from './PreciptionSummaryCard';
import Region from '../../region/Region';


const Now = (props) => {  
  
  const{ forecast , isRegionSelected, location} = props;
  const locKey = props.match.params.key;
  const city = props.match.params.city;
  
  useEffect(()=>{
    if(!isRegionSelected){
      props.selectRegion(city)
    }
    props.fetchCurrentForecast(locKey);   
  },[isRegionSelected, locKey])
  
  return (
     (forecast.isCurrentForecastDataLoaded) ? (
       <div id="currentForecast" className="w-80 mt-4 mb-4">
        <Region></Region>         
        <div className="row mt-4 mb-4">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <ForecastCard forecast={forecast.forecastData[0]} unitSystem={forecast.unitSystem}></ForecastCard>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <WeatherConditionsCard forecast={forecast.forecastData[0]} unitSystem={forecast.unitSystem}></WeatherConditionsCard>
          </div>
        </div>
         <div className="row mt-4 mb-4">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <TemperatureSummaryCard forecast={forecast.forecastData[0]} unitSystem={forecast.unitSystem}></TemperatureSummaryCard>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <PreciptionSummaryCard forecast={forecast.forecastData[0]} unitSystem={forecast.unitSystem}></PreciptionSummaryCard>
          </div>
        </div>
       </div>
    ) : (
      <div className="mt-4 mb-4">Loading...</div>
    ) 
  )
}

const mapStateToProps = (state) => {   
    return {
      forecast: state.forecast,
      isRegionSelected: state.region.isRegionSelected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurrentForecast : (key) =>  {dispatch(fetchCurrentForecast(key))},
        selectRegion : (city) =>  {dispatch(selectRegion(city))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Now);