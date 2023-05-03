import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';

export const UpdateUser = () => {
  const title = 'ADD UPDATE';
  const [ setUser ] = useState({});
  const [ setLoading ] = useState(true)
  const { id } = useParams();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const getUser = async()=>{
    try{
      const { data } = await axios(`http://localhost:3000/user/get/`,{headers: headers})
    }catch(err){
      console.error(err);
    }
  }

  const updateUser = async()=>{
    try{
      let userUpdated = {
        name: document.getElementById('inputName').value,
        surname: document.getElementById('inputSurname').value,
        username: document.getElementById('inputUsername').value
      }

      const { data } = await axios.put(`http://localhost:3000/user/update/${id}`,/* {headers: headers}, */ userUpdated,{headers: headers} )
      console.log(data)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <> 
      <form className="m-5 text-center">
        <div className="mb-3">
        <label htmlFor="inputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="inputSurname" className="form-label">Surname</label>
          <input type="text" className="form-control" id="inputSurname" required />
        </div>
        <div>
          <label htmlFor="inputUsername" className="form-label">Username</label>
          <input type="text" className="form-control" id="inputUsername" required />
        </div>
        <Link to="/dashboard/user">
          <button onClick={() => updateUser()} className="btn btn-success">UPDATE</button>
        </Link>
        <Link to="/dashboard/user">
          <button className="btn btn-danger">Cancel</button>
        </Link>
      </form>
    </>
  )
}