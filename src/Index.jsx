import React, { useState, createContext, useEffect } from 'react'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage/DashboardPage'
import { ServiciosPage } from './pages/ServiciosPage/ServiciosPage'
import { TableServicios } from './pages/ServiciosPage/TableServicios'
import { AddServicios } from './pages/ServiciosPage/AddServicios'
import { UpdateServicios } from './pages/ServiciosPage/UpdateServicios'

export const AuthContext = createContext();

export const Index = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  const [dataUser, setDataUser] = useState({
    name: '',
    username: '',
    role: ''
  })
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) setLoggedIn(true)
  }, [])

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/login',
          element: <LoginPage></LoginPage>
        },
        {
          path: '/dashboard',
              element: loggedIn ? <DashboardPage/> : <LoginPage/>,
              children: []
        },
        {
          path: '/servicios',
          element: loggedIn ? <ServiciosPage /> : <LoginPage/>,
          children: [
            {
              path: '',
              element: <TableServicios />
            },
            {
              path: 'add',
              element: <AddServicios />
            },
            {
              path: 'Update/:id',
              element: <UpdateServicios />
            },
          ]
        }
      ]
    }
  ])
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser }}>
      <RouterProvider router={routes} />
    </AuthContext.Provider>
  )
}