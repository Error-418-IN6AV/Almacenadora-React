import React, { useEffect  } from 'react'
import ReactDOM from 'react-dom/client'
import { Index } from './Index'
/* import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import './App.css'
import { ArrendamientoPage } from './pages/Arrendamiento/ArrendamietoPage.jsx'
import { TableArrendamiento } from './pages/Arrendamiento/TableArrendamiento.jsx'
import { AddArrendamiento } from './pages/Arrendamiento/AddArrendamiento.jsx'
import { UpdateArrendamiento } from './pages/Arrendamiento/UpdateArrendamiento.jsx' */
/* const userLogged = false;

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
      },
      {
        path: '/arrendamiento',
        element: <ArrendamientoPage/>,
        children: [
          {
            path: '',
            exact: true,
            element: <TableArrendamiento/>
          },
          {
            path: 'add',
            element: <AddArrendamiento/>
          },
          {
            path: 'update/:id',
            element: <UpdateArrendamiento/>
          }
        ]
      }
    ]
  }
]) */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index></Index>
  </React.StrictMode>,
)
