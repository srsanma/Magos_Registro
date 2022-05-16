import { useState, useEffect } from 'react'
import CLIENTES from './data.json'
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";

export const Welcome = () => {
    const [magos, setMagos] = useState([]);
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        fetch('https://private-8f51c8-clientesseba.apiary-mock.com/questions')
        .then((response) => response.json())
        .then((data) => setMagos(data))
        .catch((error) =>{
            console.log(error)
        })

    } , [])

    const submitHandler = (event) => {
        event.preventDefault();
        var loginExitoso = false;
        let nameId = 0;
        console.log(CLIENTES);
        //chequeo lista de clientes en api
        magos.Clientes.map((cliente) => {
            if ((cliente.user === user && cliente.password === pass))
             {
                loginExitoso = true;
                nameId = cliente.id;
                return true;
            } else {

                return false;
            }
        })
        //chequeo lista de clientes local
        CLIENTES.map((cliente) => {
            if ((cliente.user === user && cliente.password === pass))
             {
                loginExitoso = true;
                nameId = cliente.id;
                return true;
            } else {

                return false;
            }
        })
        if (loginExitoso === true) {
            alert('Login exitoso')
            navigate('/headder/' + nameId)
        } else {
            alert('Usuario o contraseña invalidos.')
        }
        
    }
    const registroHandler = () => {
        navigate('/registro')
    }
    return (
        <div className="container-sm ">
            <h1>Bienvenido al registro de magos y brujas!</h1>
            <h2>Ingrese su usuario y contraseña</h2>
            <form onSubmit={submitHandler} className="form-control bg-dark text-white">
                <div><img /></div>
                <div className="row">
                    <div className="col">
                        <label className="form-label">Usuario:</label>
                        <input type="text" name="user" value={user} onChange={(event) => setUser(event.target.value)} className="form-control" />
                    </div>
                    
                    <div className="col">
                        <label className="form-label">Contraseña:</label>
                        <input type="password" name="pass" value={pass} onChange={(event) => setPass(event.target.value)} className="form-control" />

                    </div>
                </div>
                <br />
                <div className="row"><div className="col-4"></div><button type="submit" className="btn btn-outline-info btn-lg col-4">Login</button></div>
                
            </form>
            <p>No tiene cuenta? Registrese para acceder al registro de magos!</p>
            <button className="btn btn-info col-3" onClick={registroHandler}>Registrarse</button>

        </div>
    )
}