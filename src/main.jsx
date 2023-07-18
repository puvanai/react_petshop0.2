import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LoginPage from './loginpage.jsx'
import Petfront from './Petfront.jsx'



  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      
      <BrowserRouter>
      <Petfront />

      </BrowserRouter>
      
      
    </React.StrictMode>,
  )
