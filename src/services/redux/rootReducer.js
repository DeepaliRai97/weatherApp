import { combineReducers } from 'redux';
import reducerScreenHome from './ScreenHome/reducerScreenHome';

const appReducer = combineReducers({
    reducerScreenHome
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;