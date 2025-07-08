import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Lists from './Components/Lists/Lists';
import Create from './Components/CreateList/Create';

export default (
  <Routes>
    <Route element={Home} path='/home' />
    <Route element={Lists} path='/lists' />
    <Route element={Create} path='/create' />
  </Routes>
);