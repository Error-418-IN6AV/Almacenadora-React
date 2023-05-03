import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AddBodega = () => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }

    const addBodega = async()=>{
        try {
            let cellars = {
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value,
                location: document.getElementById('inputLocation').value,
                status: document.getElementById('inputStatus').value,
                price: document.getElementById('inputPrice').value
            }
            const { data } = await axios.post('http://localhost:3000/cellars/addCellars',cellars, {headers: headers},  )
                alert(data.message)
                console.log(data)
        } catch (err) {
            alert(err)
        }
    }


  return (
    <>
        <form className='m-5 text-center'>
            <div>
                <label htmlFor="inputName" className='form-label'>Name</label>
                <input type="text" className='form-control' id='inputName' />
            </div>
            <div>
                <label htmlFor="inputDescription" className='form-label'>Description</label>
                <input type="text" className='form-control' id='inputDescription' />
            </div>
            <div>
                <label htmlFor="inputLocation" className='form-label'>Location</label>
                <input type="text" className='form-control' id='inputLocation' />
            </div>
            <div>
                <label htmlFor="inputStatus" className='form-label'>Status</label>
                <input type="text" className='form-control' id='inputStatus' />
            </div>
            <div>
                <label htmlFor="inputPrice" className='form-label'>Price</label>
                <input type="number" className='form-control' id='inputPrice' />
            </div>
        </form>
        <Link to='/dashboard/bodegas'>
            <button onClick={()=> addBodega()} className='btn btn-success'> Add</button>
        </Link>
        <Link to='/dashboard/bodegas'>
            <button className='btn btn-danger'>Cancelar</button>
        </Link>
        
    </>
  )
}

export default AddBodega