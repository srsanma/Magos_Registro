import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { InfoCliente } from './components/InfoCliente'
import { RegistroCliente } from './components/RegistroCliente'
import { Welcome } from './components/Welcome'
import { Headder } from './components/Headder';
import { ListadoClientes } from './components/ListadoClientes'
import { BrowserRouter } from 'react-router-dom'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/headder" element={<Headder />}>
          <Route path=":clienteId" element={<Headder />} />
        </Route>
        <Route path="/listado" element={<ListadoClientes />} />
        <Route path="/infoCliente" element={<InfoCliente />}>
          <Route path=":clienteId" element={<InfoCliente />} />
        </Route>
        <Route path="/registro" element={<RegistroCliente />}/>

      </Routes>
    </React.StrictMode>
  </BrowserRouter>

);


