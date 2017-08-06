import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk';
import reducer from './reducers'
import Layout from './components/Layout';
import Me from './components/Me';
import Home from './components/Home';
import { Router, Route, hashHistory , IndexRoute} from 'react-router'

import '../semantic/dist/semantic.min.css';
import './style/index.scss';

const app = document.getElementById('app');
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducer);
console.log(store.getState())
ReactDOM.render(
	<Provider store={store}>
	<Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="/me" component={Me} />
      <IndexRoute component={Home}/>
    </Route>
  </Router></Provider>, app);


