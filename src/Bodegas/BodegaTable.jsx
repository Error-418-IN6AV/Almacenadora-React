import React, { useState, useEffect } from 'react'
import { Bodega } from './Bodega'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const BodegaTable = () => {
    const [cellars, setCellars] = useState([{}])

    const getBodegas = async () => {
        try {
            const { data } = await axios('http://localhost:3000/cellars/getCellars')
            setCellars(data.cellars)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    const deleteBodega = async(id)=>{
        try {
            let confirmDelete = confirm('Are you sure to delete this Cellar')
            if(confirmDelete){
                const { data  } = await axios.delete(`http://localhost:3000/cellars/delete/${id}`)
                console.log(data)
                getBodegas()
                alert(`${data.message}: ${data.deleteBodega.name}`)
            }
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => { getBodegas(); }, []);
    return (
        <>

            <div className=' position-absolute top-50 start-50 translate-middle'>
                <div className='d-flex justify-content-center'>
                    <Link to='/AddBodega'>
                        <button type="button" className="btn btn-primary mb-2 btn-block">AddCellar</button>
                    </Link>
                </div>
                <div className="btn-group d-flex flex-wrap flex-column" role="group">
                    <button type="button" className="btn btn-primary mb-2 btn-block">All</button>
                    <button type="button" className="btn btn-primary mb-2 btn-block">Available</button>
                    <button type="button" className="btn btn-primary mb-2 btn-block">Not Available</button>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='table-responsive'>
                                <table className='table table-sm table-striped text-center'>
                                    <thead>
                                        <tr>
                                            <th className='text-center'>Name</th>
                                            <th className='text-center'>Description</th>
                                            <th className='text-center'>Location</th>
                                            <th className='text-center'>Status</th>
                                            <th className='text-center'>Price</th>
                                            <th className='text-center'>Accions</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-center'>
                                        {
                                            cellars.map(({_id, name, description, location, status, price }, index) => {
                                                return (
                                                    <tr className='text-centerz' key={index}>
                                                        <Bodega
                                                            name={name}
                                                            description={description}
                                                            location={location}
                                                            status={status}
                                                            price={price}
                                                        >
                                                        </Bodega>
                                                        <td>
                                                            <Link to={`updateBodega/${_id}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                                            </svg>
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <svg onClick={()=> deleteBodega(_id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-x-fill" viewBox="0 0 16 16">
                                                                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146 8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708z" />
                                                            </svg>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

