import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './styles/common.scss';
import Home from './pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import About from './pages/About/About';
import GitHub from './pages/GitHub/GitHub';

const App = () => {
  return (
    <div>
      <Sidebar/>
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='*' element={<Navigate to='/home' replace/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/about-site' element={<GitHub/>}/>
      </Routes>
    </div>
  )
}
export default App;
