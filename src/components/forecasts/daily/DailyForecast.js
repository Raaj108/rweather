import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDailyForecast } from '../../../redux/actions/forecasts/forecastActions';
import DailyForecastCards from './DailyForecastCards';
import Region from '../../region/Region';
import DayNight from './DayNight';
import Sun from './Sun';
import Moon from './Moon';


const DailyForecast = (props) => {
 
  const key = props.match.params.key;
  const { forecasts, isRegionSelected } = props;  
  let i = forecasts.index;
  const unitSystem = forecasts.unitSystem;
 
  useEffect(() => {
    props.fetchDailyForecast(key, unitSystem);     
  }, [key, unitSystem]);
  
  return (
    <div id="dailyForecast" className="mt-4 mb-4 w-80">
      <Region></Region>
      <div className="daily-forecast-row mt-4 mb-4">
        <DailyForecastCards forecasts={forecasts}></DailyForecastCards>
      </div>
      <div className="row daily-forecast-row mt-4 mb-4">
        <div className="col-lg-6">
          <DayNight data={forecasts.forecastData.DailyForecasts} index={i} period={"Day"}></DayNight>
        </div>      
        <div className="col-lg-6">
          <DayNight data={forecasts.forecastData.DailyForecasts} index={i} period={"Night"}></DayNight>
        </div>
      </div>
      <div className="row daily-forecast-row mt-4 mb-4">
        <div className="col-lg-6">
          <Sun data={forecasts.forecastData.DailyForecasts} index={i}></Sun>
        </div>      
        <div className="col-lg-6">
          <Moon data={forecasts.forecastData.DailyForecasts} index={i} ></Moon>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => { 
  return {
    forecasts: state.forecast,   
    isRegionSelected: state.region.isRegionSelected
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDailyForecast: (key, unitSystem) => {dispatch(fetchDailyForecast(key, unitSystem))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyForecast);
