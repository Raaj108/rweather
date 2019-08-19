import axios from 'axios';

export const selectUnitSystem = (unitSystem) => {
    return (dispatch, getState) => {
        dispatch({
            type: "SELECT_UNIT_SYSTEM",
            unitSystem
        })
    }
}

export const fetchCurrentConditionsTopCities = () => {
    return (dispatch, getState) => {
        const apiKey = "w3TQWTWIt6r6NOmXceDvGH5CvcD2JEfY";
        const url = "http://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=" + apiKey + "&details=true";
        axios.get(url).then(res => {
            dispatch({
                type: "FETCH_CURRENT_CONDITION_TOP_CITIES",
                currentConditionsTopCitiesData: res.data
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: "FETCH_CURRENT_CONDITION_TOP_CITIES_ERR",
                err
            })
        })
    }
}

export const fetchCurrentForecast = (locationKey) => {
    return (dispatch, getState) => {
        const apiKey = "w3TQWTWIt6r6NOmXceDvGH5CvcD2JEfY";
        const url = "http://dataservice.accuweather.com/currentconditions/v1/" + locationKey + "?apikey=" + apiKey + "&details=true"
        axios.get(url).then(res => {
            dispatch({
                type: "FETCH_CURRENT_FORECAST",
                forecastData: res.data
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: "FETCH_CURRENT_FORECAST_ERR",
                err
            })
        })
    }
}

export const fetchHourlyForecast = (locationKey, unitSystem) => {
    return (dispatch, getState) => {
        const metric = (unitSystem == "Imperial") ? false : true;
        const apiKey = "w3TQWTWIt6r6NOmXceDvGH5CvcD2JEfY";
        const url = "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/" + locationKey + "?apikey=" + apiKey + "&details=true" + "&metric=" + metric
        axios.get(url).then(res => {
            dispatch({
                type: "FETCH_HOURLY_FORECAST",
                hourlyForecastData: res.data
            })
        }).catch(err => {
            dispatch({
                type: "FETCH_HOURLY_FORECAST_ERR",
                err
            })
        })
    }
}

export const fetchDailyForecast = (locationKey, unitSystem) => {
    return (dispatch, getState) => {
        const metric = (unitSystem == "Imperial") ? false : true;
        const apiKey = "w3TQWTWIt6r6NOmXceDvGH5CvcD2JEfY";
        const url = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationKey + "?apikey=" + apiKey + "&details=true" + "&metric=" + metric
        axios.get(url).then(res => {
            dispatch({
                type: "FETCH_DAILY_FORECAST",
                dailyForecastData: res.data
            })
        }).catch(err => {
            dispatch({
                type: "FETCH_DAILY_FORECAST_ERR",
                err
            })
        })
    }
}

export const setIndex = (index) => {
    return (dispatch, getState) => {
        dispatch({
            type: "SET_INDEX",
            index
        })
    }
}
