import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

export const UpdateBodega = () => {
    const { id } = useParams
    const [cellars, setCellars]  = useState({})
    const getBodegas = async () => {
        try {
            const { data } = await axios('http://localhost:3000/cellars/getCellars')
            setCellars(data.cellars)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
    const updateBodega = async()=>{
        try {
            let updateBodega ={
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value,
                location: document.getElementById('inputLocation').value,
                status: document.getElementById('inputStatus').value,
                price: document.getElementById('inputPrice').value
            } 
            const { data } = await axios.put(`http://localhost:3000/cellars/updateCellar/${id}`, updateBodega)
                alert(data.message)
                console.log(data)
        } catch (err) {  
           console.error(err)
        }
    }
    
    useEffect(() => { getBodegas(); }, []);
  
    return (
    <>
        <form className='m-5 text-center'>
            <div>
                <label htmlFor="inputName" className='form-label'>Name</label>
                <input defaultValue={cellars.name} type="text" className='form-control' id='inputName' />
            </div>
            <div>
                <label htmlFor="inputDescription" className='form-label'>Description</label>
                <input defaultValue={cellars.description} type="text" className='form-control' id='inputDescription' />
            </div>
            <div>
                <label htmlFor="inputLocation" className='form-label'>Location</label>
                <input defaultValue={cellars.location} type="text" className='form-control' id='inputLocation' />
            </div>
            <div>
                <label htmlFor="inputStatus" className='form-label'>Status</label>
                <input defaultValue={cellars.status} type="text" className='form-control' id='inputStatus' />
            </div>
            <div>
                <label htmlFor="inputPrice" className='form-label'>Price</label>
                <input defaultValue={cellars.price} type="number" className='form-control' id='inputPrice' />
            </div>
             <Link to='/bodegas'> <button className='btn btn-success' onClick={()=> updateBodega()}>Update</button> </Link>
             <Link to='/bodegas'>
                    <button className='btn btn-danger'>Cancelar</button>
             </Link>
        </form>
    </>
  )
}
