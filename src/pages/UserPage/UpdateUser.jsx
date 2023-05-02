import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { User } from './User';

export const UpdateUser = () => {
  const title = 'ADD UPDATE';
  const [ setUser ] = useState({});
  const [ setLoading ] = useState(true)
  const { id } = useParams();

  const getUser = async()=>{
    try{
      const { data } = await axios(`http://localhost:3000/user/get/`)
      setUser(data.user)
      setLoading(false)
    }catch(err){
      console.error(err);
    }
  }

  const updateUser = async()=>{
    try{
      let updateUser = {
        name: document.getElementById('inputName').value,
        surname: document.getElementById('inputSurname').value,
        username: document.getElementById('inputUsername').value
      }

      const { data } = await axios.put(`http://localhost:3000/user/update/${id}`, updateUser)
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
        <Link to="/user">
          <button onClick={() => updateUser()} className="btn btn-success">UPDATE</button>
        </Link>
        <Link to="/user">
          <button className="btn btn-danger">Cancel</button>
        </Link>
      </form>
    </>
  )
}