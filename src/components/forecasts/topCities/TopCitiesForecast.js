import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentConditionsTopCities } from '../../../redux/actions/forecasts/forecastActions';
import { selectRegion } from '../../../redux/actions/region/regionActions';

const TopCitiesForecast = (props) => { 
    
  const { topCities, unitSystem } = props;
    
  useEffect(() => {
      props.fetchCurrentConditionsTopCities();
  }, []);

    console.log(topCities)
  const handleClick = (e) => {
      e.stopPropagation();
      let q = e.currentTarget.id;
      let region = e.currentTarget.getAttribute('data');
      const url = "/forecast/" + q;
      props.selectRegion(region);
      props.history.push(url);
  }
 
  const dispay = (topCities.isTopCitiesDataLoaded) ? (
    topCities.currentConditionsTopCitiesData.sort().map(data => {
      const temperature = data.Temperature[unitSystem];
      return(
        <li className="list-group-item" id={data.Country.ID + "/" + data.EnglishName + "/" + data.Key } data={data.EnglishName} key={data.Key} onClick={handleClick}>
          <span className="left m-1"><h5>{data.EnglishName},</h5> </span>
          <span className="left m-1"><h5>{data.Country.EnglishName}</h5> </span>
             
          <span className="right m-1"><h5>{temperature.Value}&deg; {temperature.Unit}</h5></span>                
          <span className="right m-1 tooltip">
              <img src={process.env.PUBLIC_URL + "/images/"+data.WeatherIcon+"-s.png"}/>
              <span className="right m-1 tooltiptext">{data.WeatherText}</span>  
        </span>      
        </li>
      )
    })
  ) : (
    <li><span>Loading...</span></li>
  );
  
  return(
    <div id="topCities" className="w-80 mt-4 mb-4">
     <h1>Top Cities</h1>
      <ul className="list-group top-cities-forecast-list">
        {dispay}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {   
  return {
    topCities : state.topCities,
    unitSystem: state.forecast.unitSystem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentConditionsTopCities: () => {dispatch(fetchCurrentConditionsTopCities())},
    selectRegion: (region) => {dispatch(selectRegion(region))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopCitiesForecast);