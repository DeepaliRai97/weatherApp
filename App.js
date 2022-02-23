import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/routes/navigation'
import store from './src/services/redux/store';

export default function App() {
 return(
     <Provider store={store}>
      <Navigation/>
     </Provider>
  )
}
