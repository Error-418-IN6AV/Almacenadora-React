import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";

export const addUser = () => {
    const title = 'Add User';
    const [users, setUser] = useState([])

    const getUsers = async () => {
        try {
            const { data } = await axios('http://localhost:3500/user/get')
            setUser(data.users)
        } catch (err) {
            console.log(err);
        }
    }

    const addUser = async () => {
        try {
            let user = {
                name: document.getElementById('inputName').value,
                surname: document.getElementById('inputSurName').value,
                username: document.getElementById('inputUserName').value,
                password: document.getElementById('inputPassword').value,
            }
            const { data } = await axios.post('http://localhost:3500/user/add', user)
            alert(data.message)
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    useEffect(() => getUsers, [])
    return (
        <>
            <Navbar></Navbar>
            <section className="vh-100 bg-image"
                style={{ backgroundImage: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp') }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style="border-radius: 15px;">
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                        <form>
                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example3cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example3cg">Your Surname</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example4cg">Your Username</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example4cdg">Password</label>
                                            </div> {
                                                users.map(({ _id, name }, i) => {
                                                    return (
                                                        <option key={i} value={_id}>{name}</option>
                                                    )
                                                })
                                            }

                                            <div className="d-flex justify-content-center">
                                                <button type="button" onClick={(e) => { e.preventDefault(); addUser() }}
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <Link to="/user">
                                                    <button className="btn btn-danger">Cancel</button>
                                                </Link>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
