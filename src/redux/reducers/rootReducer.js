import { combineReducers } from 'redux';
import forecastReducer from './forecastReducer';
import regionReducer from './regionReducer';
import topCitiesReducer from './topCitiesReducer';

const rootReducer = combineReducers({
  forecast: forecastReducer,
  region: regionReducer,
  topCities: topCitiesReducer
});

export default rootReducer;
