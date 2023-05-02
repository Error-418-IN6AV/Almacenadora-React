import React from 'react'
import { Link } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'


export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#F5EFD7"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Almacenadora</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home Page</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className="nav-link active" aria-current="page">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
