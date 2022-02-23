import {
    FETCH_WEATHER,FETCHED_WEATHER,FETCH_WEATHER_ERROR, FETCH_FORECAST, FETCHED_FORECAST, FETCH_FORECAST_ERROR
  } from './actionsScreenHome';
  
  const initialState = {
    weatherData: {},
    foreCastData:{},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case FETCH_WEATHER:
        return {
          ...state,
        };
      case FETCHED_WEATHER:
        return {
          ...state,
          weatherData: action.payload.data,
        };
      case FETCH_WEATHER_ERROR:
        return {
          ...state,
          weatherData:{}
        };
      case FETCH_FORECAST:
        return {
          ...state,
        };
      case FETCHED_FORECAST:
        return {
          ...state,
          foreCastData: action.payload.data,
        };
      case FETCH_FORECAST_ERROR:
        return {
          ...state,
          foreCastData:{}
        };
      default:
        return state;
    }
  }
  