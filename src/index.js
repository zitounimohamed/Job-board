import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reducers from './reducers';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
const jwtToken = localStorage.getItem('JWT_TOKEN');
const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

ReactDOM.render(
  <Provider store={createStore(reducers,storeEnhancer(applyMiddleware(ReduxThunk)))}>
<App />
</Provider>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
