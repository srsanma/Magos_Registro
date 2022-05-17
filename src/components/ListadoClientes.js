import CLIENTES from './data.json'
import {Headder} from './Headder'
import React from 'react';

export const ListadoClientes = () => {



    
    return (
        <React.Fragment>
            <Headder />
            <div className="container">
            
            <h2>Listado de magos registrados</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <td>Nombre: </td>
                        <td>Apellido: </td>
                        <td>Username: </td>
                    </tr>
                </thead>
                <tbody>
                    {CLIENTES.map(client => {
                        return (
                            <tr key={client.id}>
                                <td>{client.name}</td>
                                <td>{client.last_name}</td>
                                <td>{client.user}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </React.Fragment>

    )
}