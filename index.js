import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

require('./stylesheets/main.scss');

render(
  <App api="https://fcctop100.herokuapp.com/api/fccusers/top/"/>,
  document.getElementById('app')
);
