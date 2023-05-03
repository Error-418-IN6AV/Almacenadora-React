import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const UpdateArrendamiento = () => {
    const [arrendamiento, setArrendamiento] = useState({});
    const [clientes, setClients] = useState([])
    const [cellars, setCellars] = useState([])
    const [servicios, serServices] = useState([])
    const { id } = useParams();
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }

    const getArrendamiento = async()=>{
        try{
          const { data } = await axios(`http://localhost:3000/arrendamiento/get/${id}`, {headers: headers})
          setArrendamiento(data.arrendamieto)
        }catch(err){
          console.error(err);
        }
      }
    
      const getClients = async()=>{
        try{
          const { data } = await axios('http://localhost:3000/cliente/get', {headers: headers})
          setClients(data.clientes)
        }catch(err){
          console.error(err);
        }
      }

      const getCellars = async()=>{
        try{
            const { data } = await axios('http://localhost:3000/cellars/getCellars', {headers: headers})
            setCellars(data.cellars)
        }catch(err){
            console.log(err);
        }
    }
      

      const getServices = async()=>{
        try{
          const { data } = await axios('http://localhost:3000/additionalSevices/get', {headers: headers})
          serServices(data.servicios)
        }catch(err){
          console.error(err);
        }
      }
    
      const updateArrendamiento = async()=>{
        try{
          let updatedArrendamiento = {
            client: document.getElementById('inputClient').value,
            cellars: document.getElementById('inputCellar').value,
            additionalServices: document.getElementById('inputService').value
          }
    
          const { data } = await axios.put(`http://localhost:3000/arrendamiento/update/${id}`, /* {headers: headers}, */ updatedArrendamiento, {headers: headers})
          console.log(data)
        }catch(err){
          console.error(err)
        }
      }
    
      useEffect(() => {
        getArrendamiento();
        getClients();
        getCellars();
        getServices();;
      }, [])

  return (
    <>
    <h1>Update Arrendamiento</h1>
    <form className="m-5 text-center">
        <div className="mb-3">
            <label htmlFor="inputClient" className="form-label">Clients</label>
            <select defaultValue={arrendamiento.client?._id}  className="form-control" id="inputClient">
                {
                    clientes.map(({_id, name}, i)=>{
                        return(
                            <option key={i} value={_id}>{name}</option>
                        )
                    })
                }
            </select>
        </div>
        <div className="mb-3">
            <label htmlFor="inputCellar" className="form-label">Bodegas</label>
            <select defaultValue={arrendamiento.cellars?._id} className="form-control" id="inputCellar">
                {
                    cellars.map(({_id, name}, i)=>{
                        return(
                            <option key={i} value={_id}>{name}</option>
                        )
                    })
                }
            </select>
        </div>
        <div className="mb-3">
            <label htmlFor="inputService" className="form-label">Servicios</label>
            <select defaultValue={arrendamiento.additionalServices?._id}  className="form-control" id="inputService">
                {
                    servicios.map(({_id, name}, i)=>{
                        return(
                            <option key={i} value={_id}>{name}</option>
                        )
                    })
                }
            </select>
        </div>
        <Link to="/dashboard/arrendamiento">
            <button onClick={()=>updateArrendamiento()} className="btn btn-success">UPDATE</button>
        </Link>
        <Link to="/dashboard/arrendamiento">
            <button className="btn btn-danger">Cancel</button>
        </Link>
    </form>
</>
  )
}
