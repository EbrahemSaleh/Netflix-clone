import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { GlobalStyles } from './global-style';
import  App  from './app';

const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <>
      <GlobalStyles />
      <App />
    </>
    , rootEl);
}

if (module.hot) {
  module.hot.accept('./app.js', () => {
    setTimeout(render);
  })
}

render();





