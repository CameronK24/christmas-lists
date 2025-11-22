import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Create from './Components/CreateList/Create';

export default (
  <Routes>
    <Route element={<Home/>} path='/' />
    <Route element={<Home/>} path='/lists' />
    <Route element={<Create/>} path='/my-list' />
  </Routes>
);