import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import AuthProvider from './Providers/AuthProvider.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <div className='bg-cyan-600'><RouterProvider router={router}></RouterProvider></div>
    </AuthProvider>
  </React.StrictMode>,
)
