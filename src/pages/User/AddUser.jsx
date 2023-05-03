import { Link } from "react-router-dom";
import axios from "axios";

export const AddUse = ()=>{
    const title = 'ADD USER';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }

    const addUser = async()=>{
        try{
            let user = {
                name: document.getElementById('inputName').value,
                surname: document.getElementById('inputSurname').value,
                username: document.getElementById('inputUsername').value,
                password: document.getElementById('inputPassword').value,
                role: document.getElementById('inputRole').value
            }
            const { data } = await axios.post('http://localhost:3000/user/save',/* {headers: headers}, */ user,{headers: headers})
            alert(data.message)
        }catch(err){
            alert(err.response.data.message)
        }
    }

    

    return (
        <>
            <h1>{title}</h1>
            <form className="m-5 text-center">
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputSurname" className="form-label">Surname</label>
                    <input type="text" className="form-control" id="inputSurname" required/>
                </div>
                <div>
                    <label htmlFor="inputUsername" className="form-label">Username</label>
                    <input type="text" className="form-control" id="inputUsername" required/>
                </div>
                <div>
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" required/>
                </div>
                <div>
                    <label htmlFor="inputRole" className="form-label">Role</label>
                    <input type="text" className="form-control" id="inputRole" required/>
                </div>
                <Link to="/dashboard/user">
                    <button onClick={()=>addUser()} className="btn btn-success">ADD</button>
                </Link>
                <Link to="/dashboard/user">
                    <button className="btn btn-danger">Cancel</button>
                </Link>
            </form>
        </>
    )
}