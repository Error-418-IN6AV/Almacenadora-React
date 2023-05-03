import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';

export const UpdateServicios = () => {
    const [servicios, setServicios] = useState({});
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }

    const getServicios = async () => {
        try {
            const { data } = await axios(`http://localhost:3000/additionalSevices/get/`,{headers: headers})
            setServicios(data.servicios)
            setLoading(false)
        } catch (err) {
            console.error(err);
        }
    }

    const updateServicios = async () => {
        try {
            let updateService = {
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value,
                price: document.getElementById('inputPrice').value
            }
            const { data } = await axios.put(`http://localhost:3000/additionalSevices/update/${id}`, updateService, {headers: headers})
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => getServicios, [])



    return (
        <>
            <br />
            <h1 className='text-center'>UPDATE</h1>
            <div className='col-md-4 offset-md-4 mb-5 bt-5'>
                <div className='tab-content'>
                    <div className="tab-pane fade show active" id="pills-update" role="tabpanel" aria-labelledby="tab-update">
                        <form>
                            <br />
                            <div className='form-group text-center'>
                            </div>
                            <br />
                            <div className="form-floating">
                                <input type="text" id="inputName" name='text' className="form-control" placeholder='text' />
                                <label className="form-label" htmlFor="inputName">Name</label>
                            </div>
                            <br />
                            <div className="form-floating">
                                <input type="text" id="inputDescription" name='text' className="form-control" placeholder='text' />
                                <label className="form-label" htmlFor="inputDescription">Description</label>
                            </div>
                            <br />
                            <div className="form-floating">
                                <input type="Number" id="inputPrice" name='text' className="form-control" placeholder='Number' />
                                <label className="form-label" htmlFor="inputPrice">Price</label>
                            </div>
                            <br/>
                            <Link to="/dashboard/servicios">
                                <button onClick={() => updateServicios()} className="btn btn-success">UPDATE</button>
                            </Link>
                            <Link to="/dashboard/servicios">
                                <button className="btn btn-danger">Cancel</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}