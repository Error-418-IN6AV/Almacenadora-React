import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Index'

export const NavbarServicios = () => {
    const { setLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear()
        setLoggedIn(false)
        navigate('/login')
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#F5EFD7" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Almacenadora</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to='/'>
                                <li className="nav-item">
                                    <span className="nav-link active" aria-current="page">Home Page</span>
                                </li>
                            </Link>
                            <Link onClick={logOut} >
                                <li className='nav-item'>
                                    <span className="nav-link active" aria-current="page">LogOut</span>
                                </li>
                            </Link>
                            <Link to='/dashboard' >
                                <li className='head-title'>
                                    <span className="nav-link active" aria-current="page">Regresar al Dashboard</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}