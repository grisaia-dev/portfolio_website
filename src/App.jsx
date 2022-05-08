import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './styles/common.scss';
import Home from './pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div>
      <Sidebar/>
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='*' element={<Navigate to='/home' replace/>}/>
      </Routes>
    </div>
  )
}
export default App;
