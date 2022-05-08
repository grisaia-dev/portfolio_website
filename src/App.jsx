import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import './styles/common.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        
      </Route>
    </Routes>
  )
}
export default App;
