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
root.render(
  <React.StrictMode>
    <AppComponent salary={[...salary]} userName={{...userName}} />
  </React.StrictMode>
);

setTimeout(() => {
  console.log("salary: ", salary);
}, 5000);

setTimeout(() => {
  console.log("userName: ", userName);
}, 5000)