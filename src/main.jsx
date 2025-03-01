import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';





createRoot(document.getElementById('root')).render(
 <div className='max-w-screen-lg mx-auto'>
   <StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
 </div>
)
