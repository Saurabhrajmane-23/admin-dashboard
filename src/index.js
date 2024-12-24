import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Componants/Home';
import Product from './Componants/Product';
import Customers from './Componants/Customers';
import Orders from './Componants/Orders';
import AddProducts from './Componants/AddProducts';
import Account from './Componants/Account';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/customers' element={<Customers/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/addproduct' element={<AddProducts/>}/>
      <Route path='/account' element={<Account/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
