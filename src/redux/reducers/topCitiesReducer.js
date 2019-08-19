const initState = {
  currentConditionsTopCitiesData: [],
  isTopCitiesDataLoaded: false,
  topCitiesErrors: []
}

const topCitiesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CURRENT_CONDITION_TOP_CITIES":
      return {
        ...state,
        currentConditionsTopCitiesData: action.currentConditionsTopCitiesData,
          isTopCitiesDataLoaded: true,
          topCitiesErrors: null
      };
    case "FETCH_CURRENT_CONDITION_TOP_CITIES_ERR":
      return {
        ...state,
        currentConditionsTopCitiesData: [],
          isTopCitiesDataLoaded: false,
          topCitiesErrors: action.err
      };
    default:
      return state;
  }
}

export default topCitiesReducer;
