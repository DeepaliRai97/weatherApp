import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs/operators';
import { FetchWeather } from './ScreenHome/epicScreenHome';
import { FetchForecast } from './ScreenHome/epicScreenHome';


const epics = [
    FetchWeather,
    FetchForecast,
];

const TAG = 'rootEpic: ';

const rootEpic = (action$, store$, dependencies) => combineEpics(...epics)(action$, store$, dependencies).pipe(
  catchError((error, source) => {
    console.log(TAG, error);
    return source;
  }),
);

export default rootEpic;