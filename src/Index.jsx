import React, { useState, createContext, useEffect } from 'react'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage/DashboardPage';
import { UserPage } from './pages/User/UserPage';
import { Table } from './pages/User/Table';
import { AddUse } from './pages/User/AddUser';
import { UpdateUser } from './pages/User/UpdateUser'
import { ArrendamientoPage } from './pages/Arrendamiento/ArrendamietoPage.jsx'
import { TableArrendamiento } from './pages/Arrendamiento/TableArrendamiento.jsx'
import { AddArrendamiento } from './pages/Arrendamiento/AddArrendamiento.jsx'
import { UpdateArrendamiento } from './pages/Arrendamiento/UpdateArrendamiento.jsx'
import { BodegaTable } from './pages/Bodegas/BodegaTable';
import { BodegasPage } from './pages/Bodegas/BodegasPage';
import AddBodega from './pages/Bodegas/AddBodega';
import { UpdateBodega } from './pages/Bodegas/UpdateBodega';
import { ServiciosPage } from './pages/ServiciosPage/ServiciosPage';
import { TableServicios } from './pages/ServiciosPage/TableServicios';
import { AddServicios } from './pages/ServiciosPage/AddServicios';
import { UpdateServicios } from './pages/ServiciosPage/UpdateServicios';
import { ClientePage } from './pages/Client/ClientPage';
import { ClientTable } from './pages/Client/ClientTable';
import { ClienteAdd } from './pages/Client/ClientAdd';
import { ClienteUpdate } from './pages/Client/ClientUpdate';

export const AuthContext = createContext();

export const Index = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({
      name: '',
      username: '',
      role: ''
    })
    useEffect(()=> {
      let token = localStorage.getItem('token')
      if(token) setLoggedIn(true)
    }, [])

    const routes = createBrowserRouter([
        {
          path: '/',
          element: <App/>,
          errorElement: <NotFound/>,
          children: [
            {
              path: '/',
              element: <HomePage/>
            },
            {
              path: '/login',
              element: <LoginPage></LoginPage>
            },
            {
                path: 'dashboard',
                element: loggedIn ? <DashboardPage/> : <LoginPage/>,
                children: [
                  {
                    path: 'user',
                    element: <UserPage></UserPage>,
                    children: [
                        {
                        path: '',
                        exact: true,
                        element: <Table></Table>
                        },
                        {
                        path: 'add',
                        element: <AddUse></AddUse>
                        },
                        {
                        path: 'update/:id',
                        element: <UpdateUser/>
                        }
                    ]
                  },
                  {
                    path: 'arrendamiento',
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
                  },
                  {
                    path: 'bodegas',
                    element: <BodegasPage/>,
                    children: [
                    {
                        path: '',
                        exact: true,
                        element: <BodegaTable/>
                    },
                    {
                        path: 'addBodega',
                        element: <AddBodega/>
                    },
                    {
                        path: 'updateBodega/:id',
                        element: <UpdateBodega/>
                    }
                    ]
                  },
                  {
                    path: 'servicios',
                    element: <ServiciosPage/>,
                    children: [
                    {
                        path: '',
                        exact: true,
                        element: <TableServicios/>
                    },
                    {
                        path: 'add',
                        element: <AddServicios/>
                    },
                    {
                        path: 'update/:id',
                        element: <UpdateServicios/>
                    }
                    ]
                  },
                  {
                    path: 'clientes',
                    element: <ClientePage/>,
                    children: [
                    {
                        path: '',
                        exact: true,
                        element: <ClientTable/>
                    },
                    {
                        path: 'add',
                        element: <ClienteAdd/>
                    },
                    {
                        path: 'update/:id',
                        element: <ClienteUpdate/>
                    }
                    ]
                  }
                ]
              }
          ]
        }
      ])
  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn, dataUser, setDataUser}}>
      <RouterProvider router={routes}/>
    </AuthContext.Provider>
  )
}