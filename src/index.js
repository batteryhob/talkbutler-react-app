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
import { createStore } from 'redux'

//외부 스크립트
import './assets/script/butlerChat'

//스토어 생성
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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