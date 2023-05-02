import React, { useState, useEffect } from 'react'
import { Client } from '../Cliente'
import axios from 'axios'


export const ClienteTable = () => {
  const [clientes, setClientes] = useState([{}])


  const getClients = async () => {
    try {
      const { data } = await axios('http://localhost:3000/cliente/get')
      setClientes(data.clientes)
      console.log(data.clientes)

    } catch (err) {
      console.log(err);
      
    }
  };

  useEffect(() => { getClients(); }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
        { clientes.map(({ name, surname, username, email, phone }, index) => {
            return (
              <tr key={index}>
                <Client
                  name={name}
                  surname={surname}
                  username={username}
                  email={email}
                  phone={phone}
                >
                </Client>
              </tr>
            )
          })}
         
        </tbody>
      </table>
    </>
  );
};
