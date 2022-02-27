import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import rootReducer, { rootSaga } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { fetchAccountListSaga } from './reducers/reducerAccountList'

const sagaMiddleware = createSagaMiddleware();

const reduxLogger = createLogger();
const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(      
      reduxLogger,
      sagaMiddleware,
    )
  )
);

sagaMiddleware.run(rootSaga);
// sagaMiddleware.run(fetchAccountListSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
