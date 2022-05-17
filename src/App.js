import {InfoCliente} from './components/InfoCliente'
import {RegistroCliente} from './components/RegistroCliente'
import {Welcome} from './components/Welcome'
import {useContext} from 'react'
import { ListadoClientes } from './components/ListadoClientes'
import {Headder} from './components/Headder'


const isLoggedIn = true;


function App() {
  return (
    <div className="App">
      <headder>
        {isLoggedIn || <Headder/>}
      </headder>
      {!isLoggedIn || <Welcome />}       
      
      <main>

      </main>
    </div>
  );
}

export default App;
