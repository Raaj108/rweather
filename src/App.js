import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/layouts/Header';
import Now from './components/forecasts/current/Now';
import HourlyForecast from './components/forecasts/hourly/HourlyForecast';
import DailyForecast from './components/forecasts/daily/DailyForecast';
import TopCitiesForecast from './components/forecasts/topCities/TopCitiesForecast';
import Navbar from './components/layouts/Navbar';

function App(props) {
  return (
    <BrowserRouter>
        <div className="App">
          <Header></Header>
          <div className="container">
            <Switch>
              <Route exact path="/" component={TopCitiesForecast}></Route>
              <Route exact path="/forecast/:country/:city/:key" component={Now}></Route>  
              <Route exact path="/forecast/:country/:city/:key/hourly-weather-forecast" component={HourlyForecast}></Route>  
              <Route exact path="/forecast/:country/:city/:key/daily-weather-forecast" component={DailyForecast}></Route>  
            </Switch>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
