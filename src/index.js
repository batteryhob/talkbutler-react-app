import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ie대응
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

//라우터
import { BrowserRouter } from 'react-router-dom';

//상태관리
import reducers from './redux/reducers/index'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import payloadSaga from '../src/redux-saga/saga'

//외부 스크립트
import './assets/script/butlerChat'

//스토어 생성
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// then run the saga
sagaMiddleware.run(payloadSaga)

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('chat')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();