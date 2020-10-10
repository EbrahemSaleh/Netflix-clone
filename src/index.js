import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { GlobalStyles } from './global-style';
import  App  from './app';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';


const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <>
      <FirebaseContext.Provider value={{firebase}} >
      <GlobalStyles />
      <App />
      </FirebaseContext.Provider>
    </>
    , rootEl);
}

if (module.hot) {
  module.hot.accept('./app.js', () => {
    setTimeout(render);
  })
}

render();





