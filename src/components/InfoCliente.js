import CLIENTES from './data.json'
import {useParams} from 'react-router-dom'




export const InfoCliente = () => {
 let i = useParams();
 let nameId = parseInt(i.clienteId) - 1;

    return (
        <div className="container">
            <h2>Mago: {CLIENTES[nameId].name}</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>{CLIENTES[nameId].name}</td>
                        <td>{CLIENTES[nameId].last_name}</td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}