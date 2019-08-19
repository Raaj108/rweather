import React from 'react';

const HourlyPrecipCard = (props) => {
  const { forecasts } = props;
    
    const formatDate = (date) => {        
        let d = new Date(date);
        let hr = d.getHours();
        let ampm = "am";
        if (hr === 0) {
            hr = 12;
        }
        if (hr > 12) {
            hr -= 12;
            ampm = "pm";
        }
        let time = hr + " " + ampm;
        
        return time;
    }
    
    const time = (forecasts.isHourlyForecastDataLoaded) ? (
        forecasts.forecastData.slice(0,5).map((forecast,index)=> {
          return(         
            <th key={index}>
                 {formatDate(forecast.DateTime)}             
              </th>                
          )
        })        
    ) : null;
    
     const uvIndex = (forecasts.isHourlyForecastDataLoaded) ? (
        forecasts.forecastData.slice(0,5).map((forecast,index)=> {
          return(         
            <td key={index}>{forecast.UVIndex}</td>                
          )
        })        
    ) : null;
    
     const cloudCover = (forecasts.isHourlyForecastDataLoaded) ? (
        forecasts.forecastData.slice(0,5).map((forecast,index)=> {
          return(         
            <td key={index}>{forecast.CloudCover}%</td>             
          )
        })        
    ) : null;
    
     const dewPoint = (forecasts.isHourlyForecastDataLoaded) ? (
        forecasts.forecastData.slice(0,5).map((forecast,index)=> {
          return(         
            <td key={index}>{forecast.DewPoint.Value}&deg;</td>    
          )
        })        
    ) : null;
    
     const visibility = (forecasts.isHourlyForecastDataLoaded) ? (
        forecasts.forecastData.slice(0,5).map((forecast,index)=> {
          return(         
            <td key={index}>{forecast.Visibility.Value}</td>    
          )
        })        
    ) : null;
    
  return(   
    <table id="HourlySkyTable" className="table hourly-table mt-4 mb-4">
        <thead>
            <tr>
                <th className="hourly-table-col-1">Sky</th>
                {time}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>UV Index</td>
                {uvIndex}
            </tr>
            <tr>
                <td>Cloud Cover</td>
                {cloudCover}
            </tr>
            <tr>
                <td>Dew Point (&deg;{forecasts.forecastData[0].DewPoint.Unit})</td>
                {dewPoint}
            </tr>
            <tr>
                <td>Visibility ({forecasts.forecastData[0].Visibility.Unit})</td>
                {visibility}
            </tr>
        </tbody>
    </table>        
  )
};

export default HourlyPrecipCard;