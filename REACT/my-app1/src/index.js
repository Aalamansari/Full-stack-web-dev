import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import {add,sub} from './calculator.js'
import reportWebVitals from './reportWebVitals';

// alert(add(5,6))
// alert(sub(5,6))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
