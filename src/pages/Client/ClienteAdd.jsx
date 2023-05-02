import React from "react";
import "./ClinteCard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"; 

export const ClienteAdd = () => {

  const title = 'ADD CLIENT';

  const register = async()=>{
      try{
          let client = {
              name: document.getElementById('name').value,
              surname: document.getElementById('surname').value,
              username: document.getElementById('username').value,
              email: document.getElementById('email').value,
              phone: document.getElementById('phone').value
          }
          const { data } = await axios.post('http://localhost:3000/cliente/register', client)
          alert(data.message)
      }catch(err){
          alert(err.response.data.message)
      }
  }


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
                <input   type="email"  name="name" className="form-control" id="name" placeholder="."/>
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div  className="form-floating mb-3">
                <input   type="email"  name="surname" className="form-control" id="surname" placeholder="."/>
                <label htmlFor="floatingInput">Surname</label>
              </div>
              <div  className="form-floating mb-3">
                <input   type="email"  name="username" className="form-control" id="username" placeholder="."/>
                <label htmlFor="floatingInput">UserName</label>
              </div>
              <div  className="form-floating mb-3">
                <input   type="email"  name="email" className="form-control" id="email" placeholder="."/>
                <label htmlFor="floatingInput">Emial</label>
              </div>
              <div  className="form-floating mb-3">
                <input   type="email"  name="phone" className="form-control" id="phone" placeholder="."/>
                <label htmlFor="floatingInput">Phone</label>
              </div>
                <Link to='/cliente'>
                <div  className="d-grid">
                <button  onClick={()=>register()}  className="btn btn-primary btn-login text-uppercase fw-bold" type="submit"  >ADD</button>
              </div>
                </Link>

              <hr  className="my-4"/>
              <div  className="d-grid mb-2">


              <Link to='/cliente'>
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
