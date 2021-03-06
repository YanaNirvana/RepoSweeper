import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Popup from 'react-popup';

ReactDOM.render(
  <>
  <div className="popup-container">
  <Popup />
  </div>,
  <App />,
  document.getElementById('popupContainer')
  < />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
