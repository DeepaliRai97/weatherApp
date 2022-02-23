import { ofType } from 'redux-observable';
import {
  debounceTime, map, mergeMap, pluck, takeUntil,
} from 'rxjs/operators';
import { from } from 'rxjs';
import {
  fetchedForecast,
 fetchedWeather,FETCH_FORECAST,FETCH_WEATHER
} from './actionsScreenHome';
import axios from 'axios';

const TAG = 'epicScreenHome: ';

async function fetchWeatherFromApi(city) {
  console.log(TAG, 'Successfully fetched');
  const API_KEY ='5007651431985f62e77effe980636234';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
 const result = await axios.get(url)
  if (result?.status === 200&&result?.data) {
    return ({ status: true, data:  result?.data  });
  }
   return ({ status: false, data: {} });
}

export const FetchWeather = (actions$) => actions$.pipe(
  ofType(FETCH_WEATHER),
  debounceTime(500),
  pluck('payload'),
  mergeMap(({city}) => from(fetchWeatherFromApi(city)).pipe(
    map((status, data) => fetchedWeather(status, data)),
    takeUntil(actions$.pipe(ofType(FETCH_WEATHER))),
  )),
);

async function fetchForeCastFromApi(lat,long) {
  console.log(TAG, 'Successfully fetched');
  const API_KEY ='5007651431985f62e77effe980636234';
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`;
 const result = await axios.get(url)
  if (result?.status === 200&&result?.data) {
    return ({ status: true, data:  result?.data  });
  }
   return ({ status: false, data: {} });
}

export const FetchForecast = (actions$) => actions$.pipe(
  ofType(FETCH_FORECAST),
  debounceTime(500),
  pluck('payload'),
  mergeMap(({lat,long}) => from(fetchForeCastFromApi(lat,long)).pipe(
    map((status, data) => fetchedForecast(status, data)),
    takeUntil(actions$.pipe(ofType(FETCH_FORECAST))),
  )),
);
