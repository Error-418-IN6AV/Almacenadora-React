import React from 'react'
import '../DashboardPage/Dashboard.css'
export const DashboardPage = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Almacenadora</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a  className="nav-link active" aria-current="page">User</a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link active" aria-current="page">Client</a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link active" aria-current="page">Lease</a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link active" aria-current="page">Cellar</a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link active" aria-current="page">Additional services</a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link active" aria-current="page">Sign off</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
