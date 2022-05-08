import React from 'react';
import './index.module.scss';
import { Sidebar } from '../sidebar'

export const Layout = () => {
  return (
    <div className='container'> 
      <Sidebar/>
    </div>
  )
}
