import React, { useState, createContext, useEffect } from 'react'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage/DashboardPage';

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
              path: '/dashboard',
              element: loggedIn ? <DashboardPage/> : <LoginPage/>,
              children: [
                /*{
                  path: '',
                  element: </>
                },
                {
                  path: '',
                  element: </>
                },
                {
                  path: '',
                  element: </>
                },
                {
                  path: '',
                  element: </>
                }*/
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