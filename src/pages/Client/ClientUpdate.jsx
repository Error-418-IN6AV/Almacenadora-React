import React from "react";
import axios from "axios";
import { useEffect, useState } from "react"; 
import { Link, useParams } from 'react-router-dom'

export const ClienteUpdate = () => {
   const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

    const [cliente, setClient] = useState({});

    const { id } = useParams();

    const getClient = async()=>{
        try{
          const { data } = await axios(`http://localhost:3000/cliente/getClient/${id}`,{headers: headers})
          setClient(data.cliente)
        }catch(err){
          console.error(err);
        }
      }

      const update = async()=>{
        try{
          let update = {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
          }
    
          const { data } = await axios.put(`http://localhost:3000/cliente/update/${id}`,update, {headers: headers})
          console.log(data)
        }catch(err){
          console.error(err)
        }
      }
    

      useEffect(() => {

        getClient();
      }, [])


  return (
    <>
    <div  className="container">
    <div  className="row">
      <div  className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div  className="card border-0 shadow rounded-3 my-5" id="carta">
          <div  className="card-body p-4 p-sm-5">
            <h5  className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            
            <form>
              <div  className="form-floating mb-3">
                <input  defaultValue={cliente.name} type="email"  name="name" className="form-control" id="name" placeholder="."/>
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div  className="form-floating mb-3">
                <input  defaultValue={cliente.surname}  type="email"  name="surname" className="form-control" id="surname" placeholder="."/>
                <label htmlFor="floatingInput">Surname</label>
              </div>
              <div  className="form-floating mb-3">
                <input  defaultValue={cliente.username} type="email"  name="username" className="form-control" id="username" placeholder="."/>
                <label htmlFor="floatingInput">UserName</label>
              </div>
              <div  className="form-floating mb-3">
                <input defaultValue={cliente.email}  type="email"  name="email" className="form-control" id="email" placeholder="."/>
                <label htmlFor="floatingInput">Emial</label>
              </div>
              <div  className="form-floating mb-3">
                <input defaultValue={cliente.phone}  type="email"  name="phone" className="form-control" id="phone" placeholder="."/>
                <label htmlFor="floatingInput">Phone</label>
              </div>
                <Link to='/dashboard/clientes'>
                <div  className="d-grid">
                <button  onClick={()=> update()}  className="btn btn-primary btn-login text-uppercase fw-bold" type="submit"  >ADD</button>
              </div>
                </Link>

              <hr  className="my-4"/>
              <div  className="d-grid mb-2">


              <Link to='/dashboard/clientes'>
                <button  className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                  <i  className="fab  me-2"></i> CANCEL
                </button>
                </Link>            
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> 
  <script src="https://kit.fontawesome.com/d40ea9438d.js" crossOrigin="anonymous"></script>
   </>
  )
}