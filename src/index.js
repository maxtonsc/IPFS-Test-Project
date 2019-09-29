// ./src/index.js

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import { loadMessageList } from './actions/index'
import messageApp from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(messageApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(loadMessageList());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);