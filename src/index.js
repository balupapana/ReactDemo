import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import Ajax from './components/ajaxTable';
import FormOne from './components/form-one';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <div>
    <App />
    <FormOne />
        <Ajax />
      </div>
  </Provider>
  , document.querySelector('.container'));
