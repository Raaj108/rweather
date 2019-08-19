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
    
     const rain = (forecasts.isHourlyForecastDataLoaded) ? (
        forecasts.forecastData.slice(0,5).map((forecast,index)=> {
          return(         
            <td key={index}>{forecast.RainProbability}%</td>                
          )
        })        
    ) : null;
    
     const snow = (forecasts.isHourlyForecastDataLoaded) ? (
        forecasts.forecastData.slice(0,5).map((forecast,index)=> {
          return(         
            <td key={index}>{forecast.SnowProbability}%</td>             
          )
        })        
    ) : null;
    
     const ice = (forecasts.isHourlyForecastDataLoaded) ? (
        forecasts.forecastData.slice(0,5).map((forecast,index)=> {
          return(         
            <td key={index}>{forecast.IceProbability}%</td>    
          )
        })        
    ) : null;
    
    
  return(
    <table id="HourlyPrecipTable" className="table hourly-table mt-4 mb-4">
        <thead>
            <tr>
                <th className="hourly-table-col-1">Precip</th>
                {time}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Rain</td>
                {rain}
            </tr>
            <tr>
                <td>Snow</td>
                {snow}
            </tr>
            <tr>
                <td>Ice</td>
                {ice}
            </tr>
        </tbody>
    </table>     
  )
};

export default HourlyPrecipCard;