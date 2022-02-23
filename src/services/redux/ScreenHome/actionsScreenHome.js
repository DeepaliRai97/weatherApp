export const MODULE_KEY = 'categories';
export const FETCH_WEATHER = `${MODULE_KEY}_fetch_weather`;
export const FETCHED_WEATHER = `${MODULE_KEY}_fetched_weather`;
export const FETCH_WEATHER_ERROR = `${MODULE_KEY}_fetch_weather_error`
export const FETCH_FORECAST = `${MODULE_KEY}_fetch_forecast`;
export const FETCHED_FORECAST = `${MODULE_KEY}_fetched_forecast`;
export const FETCH_FORECAST_ERROR = `${MODULE_KEY}_fetch_forecast_error`

export const fetchWeather = (city) => ({
  type: FETCH_WEATHER,
  payload: { city },
});

export const fetchedWeather = ({ status, data }) => ({
  type: status ? FETCHED_WEATHER : FETCH_WEATHER_ERROR,
  payload: { data },
});


export const fetchForecast = (lat,long) => ({
  type: FETCH_FORECAST,
  payload: { lat,long },
});

export const fetchedForecast = ({ status, data }) => ({
  type: status ? FETCHED_FORECAST: FETCH_FORECAST_ERROR,
  payload: { data },
});