import React, { useState, useContext } from 'react'
import { Navbar } from '../components/Navbar'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Index'

export const LoginPage = () => {
  const { setLoggedIn, setDataUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const logIn = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post('http://localhost:3000/user/login', form)
      console.log(data.user)
      if (data.message) {
        alert(data.message)
        localStorage.setItem('token', data.token)
        setDataUser(data.userLogged)
        setLoggedIn(true)
        navigate('/dashboard')
      }
    } catch (err) {
      console.log(err)
      alert(err.response?.data.message)
      throw new Error('Error in login')
    }
  }
  return (
    <>
      <Navbar></Navbar>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Ingrese con su cuenta porfavor</p>

                    <div className="form-outline form-white mb-4">
                      <label className='form-label' htmlFor="">Username</label>
                      <input onChange={handleChange} name='username' className='form-control' type="text" />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className='form-label' htmlFor="">Password</label>
                      <input onChange={handleChange} name='password' className='form-control' type="password" />
                    </div>


                    <button onClick={(e) => logIn(e)} className='btn btn-outline-light btn-lg px-5'>
                      LogIn
                    </button>


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}