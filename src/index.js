import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Home from './components/Home';
import {  createBrowserRouter, RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    
    element: <App/>,
  },
  {
    path : '/register' ,
   
    element :<Register/>
  },
  {
    path : '/login' ,
    
    element : <Login/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/home',
    element: <Home/>
  }
]);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
