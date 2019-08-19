import React from 'react';
import { formatTime } from '../../formatData/FormatData';

const HourlyForecastCard = (props) => {
  const { forecasts } = props;
  
  const time = (forecasts.isHourlyForecastDataLoaded) ? (
      forecasts.forecastData.slice(0,5).map((forecast,index)=> {
        return(         
          <th key={index}>
              <p>{formatTime(forecast.DateTime)}</p>
              <img className="img-left" src={process.env.PUBLIC_URL + "/images/"+forecast.WeatherIcon+"-s.png"}></img>   
            </th>                
        )
      })        
    ) : null;
    
     const forecast = (forecasts.isHourlyForecastDataLoaded) ? (
        forecasts.forecastData.slice(0,5).map((forecast,index)=> {
          return(         
            <td key={index}>{forecast.IconPhrase}</td>                
          )
        })        
    ) : null;
    
     const temperature = (forecasts.isHourlyForecastDataLoaded) ? (
        forecasts.forecastData.slice(0,5).map((forecast,index)=> {
          return(         
            <td key={index}>{forecast.Temperature.Value}</td>             
          )
        })        
    ) : null;
    
     const wind = (forecasts.isHourlyForecastDataLoaded) ? (
        forecasts.forecastData.slice(0,5).map((forecast,index)=> {
          return(         
            <td key={index}>{forecast.Wind.Speed.Value} {forecast.Wind.Direction.English}</td>    
          )
        })        
    ) : null;
    
    
  return(      
    <table id="hourlyForecastTable" className="table hourly-table mt-4 mb-4">
        <thead>
            <tr>
                <th className="hourly-table-col-1">Monday</th>
                {time}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Forecast</td>
                {forecast}
            </tr>
            <tr>
                <td>Temperature (&deg;{forecasts.forecastData[0].Temperature.Unit})</td>
                {temperature}
            </tr>
            <tr>
                <td>Wind ({forecasts.forecastData[0].Wind.Speed.Unit})</td>
                {wind}
            </tr>
        </tbody>
    </table>     
  )
};

export default HourlyForecastCard;