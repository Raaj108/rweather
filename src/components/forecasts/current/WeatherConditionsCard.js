import React from 'react';

const WeatherConditionsCard = (props) => {
  const { forecast, unitSystem } = props;
  const windSpeed = forecast.Wind.Speed[unitSystem];
  const windGust = forecast.WindGust.Speed[unitSystem];
  const pressure = forecast.Pressure[unitSystem];
  const ceiling = forecast.Ceiling[unitSystem];
  const dewPoint = forecast.DewPoint[unitSystem];
  const visibility = forecast.Visibility[unitSystem];

return(    
    <div className="card h-300" id="weatherConditionCard">
      <div className="card-body">
        <p className="">Wind from {forecast.Wind.Direction.Degrees}&deg; {forecast.Wind.Direction.English} at {windSpeed.Value} {windSpeed.Unit}</p>
        <p className="text2">Wind Gust: {windGust.Value} {windGust.Unit}</p>
        <p className="text2">Humidity: {forecast.RelativeHumidity}%</p>
        <p className="text2">Pressure: {pressure.Value} {pressure.Unit}</p>
        <p className="text2">UV Index: {forecast.UVIndex}, {forecast.UVIndexText}</p>
        <p className="text2">Cloud Cover: {forecast.CloudCover}%</p>
        <p className="text2">Ceiling: {ceiling.Value} {ceiling.Unit}</p>
        <p className="text2">Dew Point: {dewPoint.Value}&deg; {dewPoint.Unit}</p>
        <p className="text2">Visibility: {visibility.Value} {visibility.Unit}</p>
      </div>
    </div>    
  )
};

export default WeatherConditionsCard;