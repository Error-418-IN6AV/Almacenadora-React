import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { Cliente } from './Cliente'

export const ClientTable = () => {


    const [clientes, setClients] = useState([{}])


    const getClients = async()=>{
        try{
            const { data } = await axios('http://localhost:3000/cliente/get')
            setClients(data.clientes)
               }catch(err){
            console.log(err)
        }
    }

    const deletedClient = async(id)=>{
        try{
            let confirmDelete = confirm('Are you sure to delete this Client?')
            if(confirmDelete){
                const { data } = await axios.delete(`http://localhost:3000/cliente/delete/${id}`)
                getClients()
                alert(`${data.message}: ${data.deletedClient.name}`)
            }
        }catch(err){
            console.error(err)
        }
    }


    useEffect(()=> getClients, [])




  return (
    <>
            <center>  <h1>Clientes</h1> </center>
    <div  className="position-absolute top-50 start-50 translate-middle">

   
       
            <table className="table table-hover">
                <thead className="table-dark" >
                    <tr>
                        <th scope="col">Name </th>
                        <th scope="col">SurName</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Phone</th>
                        <th scope="col">email</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        
                        clientes.map(({_id, name, surname, username, email, phone}, index)=>{

                            return(
                                
                                <tr key={index}>
                                    <Cliente
                                    name={name}
                                    surname={surname}
                                    username={username}
                                    email={email}
                                    phone={phone}
                                    >

                                    </Cliente>
                                    <td>
                                        <Link to={`updateClient/${_id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-gear" viewBox="0 0 16 16">
                                            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
                                            </svg>
                                         </Link>
                                       
                                    </td>
                                    <td>

                                     
                                         <svg onClick={()=> deletedClient(_id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-x-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </td>
                                </tr>
                             
                                
                            
                            )
                       
                        }
                        
                        ) 
                    } 
                         
                </tbody>
            </table>
            <Link to='addCliente'> 
                <button className="btn btn-success mb-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-add" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
</svg> ADD CLIENT</button>
            </Link>
            </div>
  

          
    </>
  )
}
