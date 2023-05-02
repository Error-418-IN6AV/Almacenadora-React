import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const AddServicios = () => {
    
    const addServicios = async () => {
        try {
            let servicio = {
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value,
                price: document.getElementById('inputPrice').value
            }
            const { data } = await axios.post('http://localhost:3000/additionalSevices/add', servicio)
            alert(data.message)
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    return (
        <>
            <br />
            <h1 className='text-center'>ADD</h1>
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
                            <Link to="/servicios">
                                <button onClick={() => addServicios()} className="btn btn-success">ADD</button>
                            </Link>
                            <Link to="/servicios">
                                <button className="btn btn-danger">Cancel</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}   