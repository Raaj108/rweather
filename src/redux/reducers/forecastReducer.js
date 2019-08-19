const initState = {
    forecastData: [],
    unitSystem: "Imperial",
    isCurrentForecastDataLoaded: false,
    isHourlyForecastDataLoaded: false,
    isDailyForecastDataLoaded: false,
    forecastErrors: null,
    index: 0
}

const forecastReducer = (state = initState, action) => {

    switch (action.type) {
            
        case "SELECT_UNIT_SYSTEM":           
            return{
              ...state,
                unitSystem: action.unitSystem
            };
        case "FETCH_CURRENT_FORECAST":
            return {
                ...state,
                forecastData: action.forecastData,
                    isCurrentForecastDataLoaded: true,
                    isHourlyForecastDataLoaded: false,
                    isDailyForecastDataLoaded: false,
                    forecastErrors: null
            };
        case "FETCH_CURRENT_FORECAST_ERR":
            return {
                ...state,
                forecastData: [],
                    isCurrentForecastDataLoaded: false,
                    isHourlyForecastDataLoaded: false,
                    isDailyForecastDataLoaded: false,
                    forecastErrors: action.err
            };
        case "FETCH_HOURLY_FORECAST":
            return {
                ...state,
                forecastData: action.hourlyForecastData,
                    isCurrentForecastDataLoaded: false,
                    isHourlyForecastDataLoaded: true,
                    isDailyForecastDataLoaded: false,
                    forecastErrors: null
            };
        case "FETCH_HOURLY_FORECAST_ERR":
            return {
                ...state,
                forecastData: [],
                    isCurrentForecastDataLoaded: false,
                    isHourlyForecastDataLoaded: false,
                    isDailyForecastDataLoaded: false,
                    forecastErrors: action.err
            };
        case "FETCH_DAILY_FORECAST":
            return {
                ...state,
                forecastData: action.dailyForecastData,
                    isCurrentForecastDataLoaded: false,
                    isHourlyForecastDataLoaded: false,
                    isDailyForecastDataLoaded: true,
                    forecastErrors: null
            };
        case "FETCH_DAILY_FORECAST_ERR":
            return {
                ...state,
                forecastData: [],
                    isCurrentForecastDataLoaded: false,
                    isHourlyForecastDataLoaded: false,
                    isDailyForecastDataLoaded: false,
                    forecastErrors: action.err
            };
        case "SET_INDEX":
            return {
                ...state,
                index: action.index
            };
        default:
            return state;
    }
}

export default forecastReducer;
