import React from 'react';

const ForecastCard = (props) => {
  const { forecast, unitSystem } = props;  
  const temperature = forecast.Temperature[unitSystem];
  return(   
    <div className="card h-300" id="forecastCard">           
      <div className="card-body">            
        <img className="wi" src={process.env.PUBLIC_URL + "/images/"+forecast.WeatherIcon+"-s.png"}></img>
        <h1 className="temperature">            
          {temperature.Value} &deg; {temperature.Unit}
        </h1>     
        <h5 className="weather-text">{forecast.WeatherText}</h5>
      </div>
    </div>   
  )
};

export default ForecastCard;