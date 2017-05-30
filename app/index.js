import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory  } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import routes from './routes';

let root = document.getElementById('app');
// browserHistory使用的时候，webpack启动的时候加个参数 --history-api-fallback
ReactDOM.render(
  <Router
   routes={routes} 
   history={browserHistory} 
  />, root
);