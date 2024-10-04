import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home/Home.jsx'
import Cliente from './routes/Cliente/Cliente.jsx'
import Error from './routes/Error/Error.jsx'
import Contato from './routes/Contato/Contato.jsx'


const router = createBrowserRouter([{

  //Pai
  path:'/',element:<App/>,
  errorElement:<Error/>,

  //Filho
  children:[
    {path:'/',element:<Home/>},
    {path:'/cliente',element:<Cliente/>},
    {path:'/contato',element:<Contato/>},

  ]

}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
