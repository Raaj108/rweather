import axios from 'axios';

export const selectRegion = (region) => {  
  return (dispatch, getState) => {    
    const apiKey = "w3TQWTWIt6r6NOmXceDvGH5CvcD2JEfY";
    const url = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=" + apiKey + "&q=" + region;
    axios.get(url)
      .then(res => {
        dispatch({
          type: "SELECT_REGION",
          selectedRegion: region,
          regionData: res.data
        })
      }).catch(err => {
        dispatch({
          type: "SELECT_REGION_ERR",
          err
        })
      })   
  }
}

export const getUserCurrentLocation = () => {
  return (dispatch, getState) => {
    if (!window.navigator.geolocation) {
      console.log("geolocation is not available");
    } else {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
      }, error => {
        console.log(error);
      })
    }
  }
}
