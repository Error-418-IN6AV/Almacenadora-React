import React, { useEffect  } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import './App.css'
import { DashboardPage } from './pages/DashboardPage/DashboardPage.jsx'
import { ClienteTable } from './pages/Cliente/ClienteTable/ClienteTable.jsx'
import { BodegaTable } from './pages/Bodegas/BodegaTable.jsx'
import AddBodega from './pages/Bodegas/AddBodega.jsx'
import { UpdateBodega } from './pages/Bodegas/UpdateBodega.jsx'
import { BodegasPage } from './pages/Bodegas/BodegasPage.jsx'
const userLogged = false;

const routes = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },{
        path: '/clientes',
        element: <ClienteTable></ClienteTable>

      },{
        path: '/bodegas',
        element: <BodegaTable></BodegaTable>
      },{
        path: 'addBodega',
        element: <AddBodega></AddBodega>
      },{
        path: 'updateBodega/:id',
        element: <UpdateBodega/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={routes}/>
  </React.StrictMode>,
)
