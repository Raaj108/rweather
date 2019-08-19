import React from 'react';

const DayNight = (props) => {
  
  const { data, index, period } = props;  
 
  const selectedForecast = (typeof data!== "undefined") ? data[index][period]:null;
  
  const getTemp = (period, tempObj) => {
    let temp = "";
    if (period === "Day") {
      temp = tempObj.Maximum.Value 
    } else {
      temp = tempObj.Minimum.Value 
    }
    return temp;
  }  
  
  return(
    (selectedForecast) ? (
      <div className="daily-forecast-card">
        <div className="row weather-forecast">
          <div className="col-lg-7">
            <h5 className="daily-forecast-card-title">{period}</h5>
            <h1 className="temperature">{getTemp(period,data[index].Temperature)}&deg;</h1>
          </div>
          <div className="col-lg-4">
            <img className="wi" src={process.env.PUBLIC_URL + "/images/"+selectedForecast.Icon+"-s.png"}></img>              
          </div>
          <div className="col-lg-12">
            <p className="precip">Precipitation {selectedForecast.PrecipitationProbability}%</p>
            <p className="forecast">{selectedForecast.LongPhrase}</p>
          </div>
        </div>
        <div className="weather-conditions">
          <p className="wind-text">
            <span>Winds from the</span><br></br>
            <span>{selectedForecast.Wind.Direction.English} @ {selectedForecast.Wind.Speed.Value} {selectedForecast.Wind.Speed.Unit}</span><br></br>
            <span>Gusts {selectedForecast.WindGust.Speed.Value} {selectedForecast.WindGust.Speed.Unit}</span>
          </p>
          <p className="text2"><span>Thunderstorm: </span><span> {selectedForecast.ThunderstormProbability}%</span></p>
          <p className="text2"><span>Precipitation: </span><span></span></p>
          <p className="text2"><span>Rain: </span><span> {selectedForecast.Rain.Value} {selectedForecast.Rain.Unit}</span></p>
          <p className="text2"><span>Snow: </span><span> {selectedForecast.Snow.Value} {selectedForecast.Snow.Unit}</span></p>
          <p className="text2"><span>Ice: </span><span> {selectedForecast.Ice.Value} {selectedForecast.Ice.Unit}</span></p>
          <p className="text2"><span>Hours Of Precipitation: </span><span> {selectedForecast.HoursOfPrecipitation} hrs</span></p>
          <p className="text2"><span>Hours Of Rain: </span><span> {selectedForecast.HoursOfRain} hrs</span></p>
        </div>
      </div>
      ) : (
        <div> Loading...</div>
      )   
   )
}

export default DayNight;