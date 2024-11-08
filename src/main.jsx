import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router-dom";
import router from './Component/Routers/Routers.jsx';
import AuthProvider from './Component/Provider/AuthProvider.jsx';




createRoot(document.getElementById('root')).render(
  <div className='w-[1100px] mx-auto'>
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>
  </div>,
)
