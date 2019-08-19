import React from 'react';
import { connect } from 'react-redux';
import { setIndex } from '../../../redux/actions/forecasts/forecastActions';
import { formatDate } from '../../formatData/FormatData';


const DailyForecastCards = (props)=>{
  
  const { forecasts } = props;   
    
    const handleClick = (e) => {
        e.stopPropagation();
        let index = e.currentTarget.id;
        props.setIndex(index);
        addActiveClass(e.currentTarget);
    }

    const addActiveClass = (ele) => {
        const activeUnit = document.getElementsByClassName("daily-forecast-card active")[0];
        activeUnit.classList.remove("active");
        if (!ele.classList.contains("active")) {
            ele.classList.add("active")
        }
    }

  return(
     (forecasts.isDailyForecastDataLoaded) ? (
      forecasts.forecastData.DailyForecasts.map((dailyForecast, index) => {
          let classList = (index == 0) ? "card daily-forecast-card active" : "card daily-forecast-card"
        return (
          <div className={classList} key={index} id={index} onClick={handleClick}>
            <div className="card-body">
              <h5 className="card-title">{formatDate(dailyForecast.Date)}</h5>
              <img className="wi-small" src={process.env.PUBLIC_URL + "/images/"+dailyForecast.Day.Icon+"-s.png"}></img>              
              <p className="temperature-small">{dailyForecast.Temperature.Maximum.Value}/{dailyForecast.Temperature.Minimum.Value}&deg; {dailyForecast.Temperature.Maximum.unit} </p>
              <p className="weather-text-small">{dailyForecast.Day.IconPhrase}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="mt-4 mb-4">Loading...</div>
    )
  );
}

const mapStateToProps = (state) => {  
  return {
    forecasts: state.forecast   
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setIndex: (index) => {dispatch(setIndex(index))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyForecastCards);