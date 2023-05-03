import React, { useState, useContext } from 'react'
import './DashboardStyle.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Index'
import { Outlet, Link } from 'react-router-dom'

export const DashboardPage = () => {
    const { setLoggedIn, dataUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isAdmin] = useState(true)
    const [showUser] = useState(false)
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
                <li className="nav-item">
                    <Link to='arrendamiento' className="nav-link active" aria-current="page">ARRENDAMIENTO</Link>
                </li>
                <li>
                    <button>
                        <span className='text'>{dataUser.role}</span>
                    </button>
                </li>
                    {
                        dataUser.role == 'ADMIN' ? (
                            <li>
                                <Link to='bodegas'>
                                    <button>
                                        <span className='text'>Bodegas</span>
                                    </button>
                                </Link>
                            </li>
                        ) : <></>
                    }  
                {
                        dataUser.role == 'ADMIN' ? (
                            <li>
                                <Link to='servicios'>
                                    <button>
                                        <span className='text'>Servicios</span>
                                    </button>
                                </Link>
                            </li>
                        ) : <></>
                    }  
                {
                        dataUser.role == 'ADMIN' ? (
                            <li>
                                <Link to='clientes'>
                                    <button>
                                        <span className='text'>Clientes</span>
                                    </button>
                                </Link>
                            </li>
                        ) : <></>
                    }
                {
                        dataUser.role == 'ADMIN' ? (
                            <li>
                                <Link to='user'>
                                    <button>
                                        <span className='text'>Users</span>
                                    </button>
                                </Link>
                            </li>
                        ) : <></>
                    }       
                <li className='nav-item'>
                    <Link onClick={logOut} className="nav-link active" aria-current="page">LogOut</Link >
                </li>
            </ul>
        </div>
    </div>
</nav>

            <section id='content'>
                {/* {
                    isAdmin ? (
                        <main>
                            <div className='head-title'>
                                <div className='left'>
                                    <h1>Control Administrator</h1>
                                </div>
                            </div>
                            <ul className='box-info'>
                                <li>
                                    <span className='text'>
                                        <h3>HHHH</h3>
                                    </span>
                                </li>
                                <li>
                                    <span className='text'>
                                        <h3>HHHHH</h3>
                                    </span>
                                </li>
                                <li>
                                    <span className='text'>
                                        <h3>HHHH</h3>
                                    </span>
                                </li>
                                <li>
                                    <span className='text'>
                                        <h3>HHHH</h3>
                                    </span>
                                </li>
                            </ul>
                        </main>
                    ) : (
                        <>
                        </>
                    )
                } */}
                <Outlet></Outlet>
            </section>
        </>
    )
}