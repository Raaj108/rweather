import axios from 'axios';

export const fetchTopCities = () => {
  return (dispatch, getState) => {
    const apiKey = "w3TQWTWIt6r6NOmXceDvGH5CvcD2JEfY";
    const url = "http://dataservice.accuweather.com/locations/v1/topcities/50?apikey=" + apiKey + "&details=true";
    axios.get(url)
      .then(res => {
        dispatch({
          type: "GET_TOP_CITIES",
          topCitiesData: res.data
        })
      }).catch(err => {
        dispatch({
          type: "GET_TOP_CITIES_ERR",
          err
        })
      })
  }
}

