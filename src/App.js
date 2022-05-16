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
      {!isLoggedIn || <Welcome />}       
      {isLoggedIn || <Headder/>}
      <main>
      {/* <InfoCliente clientIndex={2}/>  
      <RegistroCliente /> 
      <ListadoClientes /> */}
      </main>
    </div>
  );
}

export default App;
