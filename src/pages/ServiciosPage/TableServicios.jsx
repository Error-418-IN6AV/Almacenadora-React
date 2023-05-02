import { useState, useEffect } from "react";
import { Servicio } from "./Servicio";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { Link } from "react-router-dom";
import { NavbarServicios } from "./NavbarServicios";

export const TableServicios = () => {
    const navigate = useNavigate();
    const [fakeServicio, setFakeServicio] = useState([
        { name: 'Jeans', description: 'Pantalones de lona', price: 180 },
    ])
    const [servicios, setServicios] = useState([{}])
    const [setLoading] = useState(true)

    const getServicios = async () => {
        try {
            const { data } = await axios('http://localhost:3000/additionalSevices/get')
            setServicios(data.servicios)
            setLoading(false)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => getServicios, [])

    return (
        <>
        <NavbarServicios></NavbarServicios>
            <br/>
            <br/>
            <div className='form-group text-center'>
            <Link to='add'>
                <button className="btn btn-success mb-5">ADD SERVICIOS</button>
            </Link>
            </div>
            <table class="table table-sm table-dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        servicios.map(({ _id, name, description, price }, index) => {
                            return (
                                <tr key={index}>
                                    <Servicio
                                        name={name}
                                        description={description}
                                        price={price}
                                    >
                                    </Servicio>
                                    <td>
                                        <Link to={`Update/${_id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}