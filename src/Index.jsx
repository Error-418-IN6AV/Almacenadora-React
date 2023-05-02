import React, { useState, createContext, useEffect } from 'react'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { UserPage } from './pages/UserPage/UserPage';
import { Table } from './pages/UserPage/Table';
import { AddUse } from './pages/UserPage/AddUser';
import { UpdateUser } from './pages/UserPage/UpdateUser'

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
              path: '/user',
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
          ]
        }
      ])
  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn, dataUser, setDataUser}}>
      <RouterProvider router={routes}/>
    </AuthContext.Provider>
  )
}