import React from 'react';
import ReactDom from 'react-dom';
import App from './app';


const rootEl = document.getElementById('root');

let render = () => {

  ReactDom.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootEl
  );

}


if (module.hot) {
  module.hot.accept('./app.js', () => {
    setTimeout(render)
  }) 
}


render();





