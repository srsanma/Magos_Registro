import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {useParams} from 'react-router-dom'
import { ListadoClientes } from "./ListadoClientes";  
import { InfoCliente } from "./InfoCliente";
import { RegistroCliente } from "./RegistroCliente";

export const Headder = () => {
    let i = useParams();
    let nameId = parseInt(i.clienteId);
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Magiregist</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/listado" className="nav-link">Listado de Magos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/infoCliente/${nameId}`}  className="nav-link">Mi Perfil</Link>
                    </li>

                </ul>
            </div>
        </nav> 
        
        
    )
};