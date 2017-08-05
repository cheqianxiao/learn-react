import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {provider} from 'react-redux'
import {reducer} from './reducers'
import Layout from './components/Layout';
import Me from './components/Me';
import Home from './components/Home';
import { Router, Route, hashHistory , IndexRoute} from 'react-router'

import '../semantic/dist/semantic.min.css';
import './style/index.scss';

const app = document.getElementById('app');
const store = createStore(reducer)

ReactDOM.render(
	<Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="/me" component={Me} />
      <IndexRoute component={Home}/>
    </Route>
  </Router>, app);


