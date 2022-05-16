import {useState} from 'react'
import CLIENTES from './data.json'
import {useNavigate} from 'react-router-dom'

export const RegistroCliente = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [last_name, setLast_name] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        alert('Hola ' + [name] + ' ' + [last_name] + ', bienvenido!')
        
        var formData = new FormData();
        formData = {id: CLIENTES.length + 1, user: user, password: pass, name: name, last_name: last_name}
        CLIENTES.push(formData)


         fetch('https://private-8f51c8-clientesseba.apiary-mock.com/questions', {
             method: 'POST',
             body: JSON.stringify(formData
                //  id: newUser.id,
                //  user: newUser.user,
                //  password: newUser.pass,
                //  name: newUser.name,
                //  last_name: newUser.last_name
             ),
             headers: {
                 'Content-type': 'application/json; charset=UTF-8',
             },
         })
             .then((response) => response.json())
             .then((json) => console.log(json));
             console.log(CLIENTES);
             navigate('/');


    }
    return (
        <div className="container">
            <h2 className="text-red">Registrar Mago o bruja</h2>
            <form onSubmit={submitHandler} className="form-control bg-dark text-white">
                <div>
                    <label className="form-label">User:</label>
                    <input type="text" name="nombre" value={user} onChange={(event) => setUser(event.target.value)} className="form-control " required/>
                    <label className="form-label">Password:</label>
                    <input type="password" name="nombre" value={pass} onChange={(event) => setPass(event.target.value) } className="form-control" required/>
                    <label className="form-label">Nombre:</label>
                    <input type="text" name="nombre" value={name} onChange={(event) => setName(event.target.value)} className="form-control" required/>
                    <label className="form-label">Apellido:</label> 
                    <input type="text" name="nombre" value={last_name} onChange={(event) => setLast_name(event.target.value)} className="form-control" required/>
                    <br/>
                    <button type='submit' className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}