import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppComponent from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
let salary = [1,2,3,4,5,6,7];
let userName = {
  firstName: "Meha",
  lastName: "Bhandari"
}
/*
  Props are read-only. 
  In order to pass array and obj in immutable format,
  we spread the array and de-structure the obj.
*/

root.render(
  <React.StrictMode>
    <AppComponent salary={[...salary]} userName={{...userName}} />
  </React.StrictMode>
);

/* 
  Below 2 setTimeout are to check if the data updations 
  in props (in app.js file) will update the source as well or not.
*/
setTimeout(() => {
  console.log("salary: ", salary);
}, 5000);

setTimeout(() => {
  console.log("userName: ", userName);
}, 5000)