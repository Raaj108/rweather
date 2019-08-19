import React from 'react';
import { formatTime, epochToHours } from '../../formatData/FormatData';

const Sun = (props) => {
  const { data, index } = props;  
 
  const selectedForecast = (typeof data!== "undefined") ? data[index].Sun : null;  
  return(
    (selectedForecast) ? (
      <div className="daily-forecast-card">
        <div className="row sunrise-sunset">
          <div className="col-lg-7">
            <h5 className="daily-forecast-card-title">Sunrise/Sunset</h5>            
            <p className="text2">Sunrise: { formatTime(selectedForecast.Rise) }</p>
            <p className="text2">Sunset: { formatTime(selectedForecast.Set) }</p>
            <p className="text2">Duration : { epochToHours(selectedForecast.EpochRise) -epochToHours(selectedForecast.EpochSet) } Hrs</p>           
          </div>
          <div className="col-lg-4">
            <img className="wi-small" src={process.env.PUBLIC_URL + "/images/1-s.png"}></img>   
          </div>
        </div>
      </div>
    ): (
      <div> Loading...</div>
    )
  )
}

export default Sun;