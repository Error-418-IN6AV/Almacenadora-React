import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const AddArrendamiento = () => {
    const [clientes, setClients] = useState([])
    const [cellars, setCellars] = useState([])
    const [servicios, serServices] = useState([])
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }

    const getClients = async()=>{
        try{
            const { data } = await axios('http://localhost:3000/cliente/get',{headers: headers} )
            setClients(data.clientes)
        }catch(err){
            console.log(err);
        }
    }

    const getCellars = async()=>{
        try{
            const { data } = await axios('http://localhost:3000/cellars/getCellars',{headers: headers})
            setCellars(data.cellars)
        }catch(err){
            console.log(err);
        }
    }

    const getServices = async()=>{
        try{
            const { data } = await axios('http://localhost:3000/additionalSevices/get',{headers: headers})
            serServices(data.servicios)
        }catch(err){
            console.log(err);
        }
    }

    const addArrendamiento = async()=>{
        try{
            let arrendamiento = {
                client: document.getElementById('inputClient').value,
                cellars: document.getElementById('inputCellar').value,
                additionalServices: document.getElementById('inputService').value
            }
            const { data } = await axios.post('http://localhost:3000/arrendamiento/add',arrendamiento,{headers: headers})
            alert(data.message)
        }catch(err){
            alert(err.response.data.message)
        }
    }

    useEffect(()=>{
        getClients();
        getCellars();
        getServices();
      } , [])


  return (
    <>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div className='position-absolute top-50 start-50 translate-middle'>
    <h1>Add Arrendamiento</h1>
    <form className="m-5 text-center">
        <div className="mb-3">
            <label htmlFor="inputClient" className="form-label">Clients</label>
            <select className="form-control" id="inputClient">
                {
                    clientes&&clientes.map(({_id, name}, i)=>{
                        return(
                            <option key={i} value={_id}>{name}</option>
                        )
                    })
                }
            </select>
        </div>
        <div className="mb-3">
            <label htmlFor="inputCellar" className="form-label">Cellars</label>
            <select className="form-control" id="inputCellar">
                {
                    cellars &&cellars.map(({_id, name}, i)=>{
                        return(
                            <option key={i} value={_id}>{name}</option>
                        )
                    })
                }
            </select>
        </div>
        <div className="mb-3">
            <label htmlFor="inputService" className="form-label">Services</label>
            <select className="form-control" id="inputService">
                {
                    servicios&& servicios.map(({_id, name}, i)=>{
                        return(
                            <option key={i} value={_id}>{name}</option>
                        )
                    })
                }
            </select>
        </div>
        <Link to="/dashboard/arrendamiento">
            <button onClick={()=>addArrendamiento()} className="btn btn-success">ADD</button>
        </Link>
        <Link to="/dashboard/arrendamiento">
            <button className="btn btn-danger">Cancel</button>
        </Link>
    </form>
    </div>
</>
  )
}
