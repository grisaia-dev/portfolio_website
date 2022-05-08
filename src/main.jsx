import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App'
import './views/styles/reset.scss'
import './views/styles/common.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
