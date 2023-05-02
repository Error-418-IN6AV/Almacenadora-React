import React, { useEffect  } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import {ClientePage} from './pages/Client/ClientePage.jsx'
import { ClientTable } from './pages/Client/ClientTable.jsx'
import {ClienteAdd} from './pages/Client/ClienteAdd.jsx'
import './App.css'
import { ClienteUpdate } from './pages/Client/ClienteUpdate.jsx'
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
      },
      {
        path:'/cliente',
        element:<ClientePage></ClientePage>,
        children:[
          {
            path:'',
            exact:true,
            element:<ClientTable></ClientTable>
          },
          {
            path:'addCliente',
            exact:true,
            element:<ClienteAdd></ClienteAdd>
          },
          {
            path:'updateClient/:id',
            exact:true,
            element:<ClienteUpdate></ClienteUpdate>
          }
        ]
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={routes}/>
  </React.StrictMode>,
)
