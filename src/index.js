import React from 'react';
import ReactDOM from 'react-dom';
// Implements Routing, must hold App
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/reducers';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
  reducer,
  {
    projects: { projects: [] },
    cards: { cards: [] }
  },
  applyMiddleware(
    thunkMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
