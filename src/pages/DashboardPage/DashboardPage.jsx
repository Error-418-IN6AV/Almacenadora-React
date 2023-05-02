import React from 'react'
import './DashboardStyle.css'
import { Link } from 'react-router-dom'
import { NavbarServicios } from '../ServiciosPage/NavbarServicios'

export const DashboardPage = () => {
    return (
        <>
            <NavbarServicios></NavbarServicios>
            <section id='content'>
                <main>
                    <div className='head-title'>
                        <div className='left'>
                            <h1>Control Administrator</h1>
                        </div>
                    </div>
                    <ul className='box-info'>
                        <Link to='/servicios'>
                            <li>
                                <span className='text'>
                                    <h3>Agregar Servicios</h3>
                                </span>
                            </li>
                        </Link>
                        <Link to=''>
                            <li>
                                <span className='text'>
                                    <h3>Agregar</h3>
                                </span>
                            </li>
                        </Link>
                        <Link to=''>
                            <li>
                                <span className='text'>
                                    <h3>Agregar</h3>
                                </span>
                            </li>
                        </Link>
                        <Link to=''>
                            <li>
                                <span className='text'>
                                    <h3>Agregar</h3>
                                </span>
                            </li>
                        </Link>
                    </ul>
                </main>
            </section>
        </>

    )
}